-- Filtro Pandoc per PDF/ePub dei saggi (audit 2026, L6).
-- 1. L'HTML grezzo nel Markdown (figure, iframe, script MathJax) viene
--    riletto come HTML: le immagini diventano immagini vere, script e
--    iframe spariscono.
-- 2. I percorsi assoluti del sito (/images/...) puntano alla cartella src/.
-- 3. Nel PDF si tengono solo i formati che LaTeX sa includere.
local target = FORMAT

local function fix_image(img)
  local src = img.src
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
  if ok then return doc.blocks end
  return {}
end

function RawInline(el)
  if is_html(el.format) then return {} end
end

function Image(img) return fix_image(img) end
