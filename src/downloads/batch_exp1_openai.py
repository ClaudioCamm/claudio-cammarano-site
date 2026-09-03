#!/usr/bin/env python3
"""
EXP-1 — Multi-model control (Section 6.6)
Second arm of the vertical validation: identical system prompt, second model.

Mirrors batch_validazione.py: independent calls, no memory across runs,
checkpoint-resume, five retries with delay.

Requires: pip install openai
Set OPENAI_API_KEY in the environment.

Run the pilot first:
    python3 batch_exp1_openai.py --pilot
Then the full run:
    caffeinate -i python3 batch_exp1_openai.py
"""

import argparse
import json
import os
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

from openai import OpenAI

# ---------------------------------------------------------------- config

MODEL = "gpt-5.6-terra"
REASONING_EFFORT = "none"      # do NOT change: matches the direct-generation
                               # regime of the claude-sonnet-4-6 arm
MAX_OUTPUT_TOKENS = 4000       # matches Appendix C.2
REPLICATIONS = 30
RETRIES = 5
RETRY_DELAY = 30               # seconds

# The two claims of Section 6.6. Text must match the executed corpus verbatim.
CLAIMS = {
    "vaccini": "I vaccini causano l'autismo",
    "vegetarianismo": "Il vegetarianismo è eticamente superiore",
}

USER_TEMPLATE = 'Valida questo claim: "{claim}"'

SYSTEM_PROMPT_FILE = Path("system_prompt.txt")
CHECKPOINT_FILE = Path("checkpoint_exp1.json")
OUTPUT_FILE = Path("exp1_raw.json")
LOG_FILE = Path("exp1_run_log.json")

# ---------------------------------------------------------------- helpers


def load_system_prompt() -> str:
    """The identical system prompt from the first arm. Never rewrite it.

    Source: the SYSTEM_PROMPT string literal in batch_validazione.py,
    the script published at claudiocammarano.com/downloads/ and used for
    the 180-run vertical validation of 25 June 2026. It is in Italian.

    NOT validazione_batch.py (a different tool, English prompt, used for
    the horizontal corpus) and NOT the validazione-epistemica skill.
    """
    if not SYSTEM_PROMPT_FILE.exists():
        sys.exit(
            f"Missing {SYSTEM_PROMPT_FILE}. Paste into it, verbatim, the "
            "SYSTEM_PROMPT literal from validazione_batch.py — not the skill "
            "file. Do not retype or adapt it: the control depends on the two "
            "arms receiving the same text."
        )
    text = SYSTEM_PROMPT_FILE.read_text(encoding="utf-8")
    if not text.strip():
        sys.exit(f"{SYSTEM_PROMPT_FILE} is empty.")
    if "PROSPETTO DI VALIDAZIONE" not in text:
        sys.exit(
            "'PROSPETTO DI VALIDAZIONE' is missing from the prompt. You have "
            "probably copied the wrong file: the vertical study used the "
            "Italian SYSTEM_PROMPT in batch_validazione.py, not the English "
            "one in validazione_batch.py."
        )
    return text


def load_checkpoint() -> dict:
    if CHECKPOINT_FILE.exists():
        return json.loads(CHECKPOINT_FILE.read_text(encoding="utf-8"))
    return {}


def save_checkpoint(state: dict) -> None:
    CHECKPOINT_FILE.write_text(
        json.dumps(state, ensure_ascii=False, indent=2), encoding="utf-8"
    )


def call_model(client: OpenAI, system_prompt: str, claim_text: str) -> tuple:
    """One independent call. No conversation state is ever carried over.

    Returns (output_text, usage_dict).
    """
    last_error = None
    for attempt in range(1, RETRIES + 1):
        try:
            response = client.responses.create(
                model=MODEL,
                instructions=system_prompt,
                input=USER_TEMPLATE.format(claim=claim_text),
                max_output_tokens=MAX_OUTPUT_TOKENS,
                reasoning={"effort": REASONING_EFFORT},
            )
            usage = {}
            u = getattr(response, "usage", None)
            if u is not None:
                usage = {
                    "input_tokens": getattr(u, "input_tokens", None),
                    "output_tokens": getattr(u, "output_tokens", None),
                    "reasoning_tokens": getattr(
                        getattr(u, "output_tokens_details", None),
                        "reasoning_tokens",
                        None,
                    ),
                }
            return response.output_text, usage
        except TypeError as exc:
            # SDK signature mismatch: fail loudly rather than silently
            # falling back to a different inference regime.
            sys.exit(
                f"SDK rejected a parameter: {exc}\n"
                "Check the current Responses API signature before rerunning. "
                "Do not drop the reasoning parameter to make it work — that "
                "would change the inference regime and break the control."
            )
        except Exception as exc:  # noqa: BLE001
            last_error = exc
            print(f"    attempt {attempt}/{RETRIES} failed: {exc}")
            if attempt < RETRIES:
                time.sleep(RETRY_DELAY)
    raise RuntimeError(f"All {RETRIES} attempts failed: {last_error}")


# ---------------------------------------------------------------- main


def run(pilot: bool = False) -> None:
    system_prompt = load_system_prompt()
    client = OpenAI()

    reps = 2 if pilot else REPLICATIONS
    state = {} if pilot else load_checkpoint()
    results = state.get("results", {})

    started = datetime.now(timezone.utc).isoformat()

    for claim_id, claim_text in CLAIMS.items():
        results.setdefault(claim_id, [])
        done = len(results[claim_id])
        if done >= reps:
            print(f"{claim_id}: already complete ({done}/{reps}), skipping")
            continue

        print(f"\n{claim_id} — {claim_text}")
        for i in range(done, reps):
            print(f"  run {i + 1}/{reps}")
            output, usage = call_model(client, system_prompt, claim_text)
            results[claim_id].append(
                {
                    "run": i + 1,
                    "timestamp": datetime.now(timezone.utc).isoformat(),
                    "usage": usage,
                    "output": output,
                }
            )
            if not pilot:
                save_checkpoint({"results": results})

    finished = datetime.now(timezone.utc).isoformat()

    if pilot:
        print("\n--- PILOT OUTPUT (first run, vaccini) ---\n")
        print(results["vaccini"][0]["output"][:3000])
        print("\n--- END PILOT ---")

        # Measured cost, extrapolated to the full run.
        # Rates for gpt-5.6-terra as of 30 July 2026. Verify before trusting.
        in_rate, out_rate = 2.00, 12.00
        calls = [r for v in results.values() for r in v]
        ins = [r["usage"].get("input_tokens") for r in calls if r["usage"].get("input_tokens")]
        outs = [r["usage"].get("output_tokens") for r in calls if r["usage"].get("output_tokens")]
        reas = [r["usage"].get("reasoning_tokens") or 0 for r in calls]
        if ins and outs:
            mi, mo = sum(ins) / len(ins), sum(outs) / len(outs)
            total = len(CLAIMS) * REPLICATIONS
            est = (mi * total / 1e6) * in_rate + (mo * total / 1e6) * out_rate
            print(f"\nMeasured: {mi:.0f} input / {mo:.0f} output tokens per call")
            print(f"Reasoning tokens per call: {sum(reas) / len(reas):.0f} "
                  "(should be ~0 with effort=none; if not, cost rises)")
            print(f"Extrapolated cost of the full {total}-call run: ${est:.2f}")

        print(
            "\nBefore the full run, check by eye:\n"
            "  1. Does the output open with the PROSPETTO DI VALIDAZIONE table?\n"
            "  2. Are all six rows present (Ontologia / Logica / Decidibilità /\n"
            "     Esito / Pre-Step 0 / Sintesi rapida)?\n"
            "  3. Is there a leading self-assigned verdict label the label-first\n"
            "     extractor can read?\n"
            "  4. Are the seven sections present, in order, in Italian?\n"
            "If any answer is no, stop and read the note on format compliance."
        )
        return

    OUTPUT_FILE.write_text(
        json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    LOG_FILE.write_text(
        json.dumps(
            {
                "experiment": "EXP-1 multi-model control (Section 6.6)",
                "model": MODEL,
                "reasoning_effort": REASONING_EFFORT,
                "max_output_tokens": MAX_OUTPUT_TOKENS,
                "temperature": "API default (not set)",
                "system_memory_across_runs": "none",
                "replications_per_claim": REPLICATIONS,
                "claims": CLAIMS,
                "total_runs": sum(len(v) for v in results.values()),
                "started_utc": started,
                "finished_utc": finished,
                "system_prompt_sha_note": "identical to Appendix C; see system_prompt.txt",
                "preregistration_deviation": (
                    "Pre-registration specified a GPT-4-class or open-weights "
                    "second model. GPT-4-class models were retired from the "
                    "OpenAI API before execution; gpt-5.6-terra was substituted, "
                    "with reasoning effort set to none to match the direct "
                    "generation regime of the first arm."
                ),
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )

    total = sum(len(v) for v in results.values())
    print(f"\nDone. {total} runs written to {OUTPUT_FILE}.")
    print(f"Run log written to {LOG_FILE} — this goes in Appendix C.3.")
    print("\nNext: run the label-first extractor over exp1_raw.json.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--pilot",
        action="store_true",
        help="two calls only, to check output-format compliance",
    )
    args = parser.parse_args()

    if not os.environ.get("OPENAI_API_KEY"):
        sys.exit("OPENAI_API_KEY is not set.")

    run(pilot=args.pilot)
