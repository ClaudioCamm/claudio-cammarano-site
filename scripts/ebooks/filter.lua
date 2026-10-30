-- Filtro Pandoc per PDF/ePub dei saggi (audit 2026, L6).
-- 1. L'HTML grezzo nel Markdown (figure, iframe, script MathJax) viene
--    riletto come HTML: le immagini diventano immagini vere, script e
--    iframe spariscono.
-- 2. I percorsi assoluti del sito (/images/...) puntano alla cartella src/.
-- 3. Nel PDF si tengono solo i formati che LaTeX sa includere.
local target = FORMAT

local function fix_image(img)
  local src = img.src
  if src:sub(1, 5) == "data:" then
    -- SVG in linea: l'ePub lo tiene, LaTeX non sa includerlo
    if target:match("latex") or target:match("pdf") then return {} end
    return img
  end
  if src:sub(1, 1) == "/" then img.src = "src" .. src end
  local ext = (img.src:match("%.([%w]+)$") or ""):lower()
  if target:match("latex") or target:match("pdf") then
    if not (ext == "png" or ext == "jpg" or ext == "jpeg" or ext == "pdf") then
      return {}
    end
  else
    if not (ext == "png" or ext == "jpg" or ext == "jpeg" or ext == "svg" or ext == "gif") then
      return {}
    end
  end
  return img
end

local function is_html(fmt) return fmt == "html" or fmt == "html5" end

function RawBlock(el)
  if not is_html(el.format) then return nil end
  if el.text:match("<script") or el.text:match("<iframe") or el.text:match("<style") then
    -- tieni solo eventuali immagini o testo intorno allo script
    local cleaned = el.text:gsub("<script.-</script>", ""):gsub("<iframe.-</iframe>", ""):gsub("<style.-</style>", "")
    if cleaned:match("^%s*$") then return {} end
    el.text = cleaned
  end
  local ok, doc = pcall(pandoc.read, el.text, "html")
  if not ok then return {} end
  doc = doc:walk({ Image = fix_image })
  -- una figura rimasta senza immagine (formato escluso) non lascia la didascalia vuota
  doc = doc:walk({ Figure = function(f)
    local ha = false
    f:walk({ Image = function() ha = true end })
    if not ha then return {} end
  end })
  return doc.blocks
end

function RawInline(el)
  if is_html(el.format) then return {} end
end

function Image(img) return fix_image(img) end

-- 4. Seconda passata: i blocchi della catena (tesi, scheda, controtesi) e le
--    badge dei criteri. Sta in una passata a parte perche' l'HTML che produce
--    non deve ripassare da RawBlock, che lo rileggerebbe come documento.
local function inLatex() return target:match("latex") or target:match("pdf") end

local function avvolgi(el, nome)
  local out = {}
  out[#out + 1] = inLatex() and pandoc.RawBlock("latex", "\\begin{" .. nome .. "}")
                            or pandoc.RawBlock("html", '<aside class="cc-' .. nome .. '">')
  for _, b in ipairs(el.content) do out[#out + 1] = b end
  out[#out + 1] = inLatex() and pandoc.RawBlock("latex", "\\end{" .. nome .. "}")
                            or pandoc.RawBlock("html", "</aside>")
  return out
end

local blocchi = { tesi = true, scheda = true, controtesi = true }

local catena = {
  Div = function(el)
    local n = el.classes[1]
    if n and blocchi[n] then return avvolgi(el, n) end
  end,
  Span = function(el)
    if el.classes[1] ~= "badge" then return nil end
    if inLatex() then
      return pandoc.RawInline("latex", "\\ccBadge{" .. pandoc.utils.stringify(el) .. "}")
    end
    return pandoc.Span(el.content, pandoc.Attr("", { "cc-badge" }))
  end
}

return { { RawBlock = RawBlock, RawInline = RawInline, Image = Image }, catena }
