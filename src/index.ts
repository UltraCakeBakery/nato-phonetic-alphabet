/**
 * NATO phonetic alphabet utilities
 *
 * Exports:
 * - letters: array of lowercase letters ('a'..'z')
 * - codewords: array of lowercase codewords (alfa..zulu)
 * - toPhonetic(text, options?): convert text to phonetic representation
 * - placeholder(n, separator?): deterministic placeholder for numbers
 * - getAlphabet(): returns a plain object mapping characters to codewords
 */

export const letters: string[] = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))

export const codewords: string[] = [
  'alfa', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel', 'india', 'juliett',
  'kilo', 'lima', 'mike', 'november', 'oscar', 'papa', 'quebec', 'romeo', 'sierra', 'tango',
  'uniform', 'victor', 'whisky', 'x-ray', 'yankee', 'zulu'
]

const lower_lookup: Record<string, string> = {}
const upper_lookup: Record<string, string> = {}
const capitalized_lookup: Record<string, string> = {}

for (let i = 0; i < letters.length; i++) {
  lower_lookup[letters[i]] = codewords[i]
  upper_lookup[letters[i].toUpperCase()] = codewords[i].toUpperCase()
  capitalized_lookup[letters[i]] = codewords[i][0].toUpperCase() + codewords[i].slice(1)
}

export type ConvertMode = 'lower' | 'upper' | 'capitalized' | 'auto' | 'auto-capitalized'

/**
 * Convert a string to NATO phonetic codewords.
 * Signature: toPhonetic(text, mode?, divider?)
 *
 * Defaults (heuristic):
 * - If only `text` is provided, the default divider is a single space (' ').
 * - If a `mode` is provided but no `divider`, the function historically used
 *   no separator (''), so we follow that behavior for backward compatibility.
 * - If `divider` is provided explicitly, it is used as-is.
 *
 * The function groups contiguous non-letter runs together and preserves them
 * verbatim in the output. When the divider is a single space, we avoid
 * inserting duplicate whitespace around existing whitespace tokens.
 */
export function toPhonetic(text: string, mode: ConvertMode = 'auto-capitalized', divider = ' '): string {
  if (text.length === 0) return ''

  // Simpler, non-backwards-compatible behavior: always default divider to a
  // single space unless caller provided an explicit divider. Mode defaults to
  // 'auto-capitalized'. This keeps the API straightforward.
  const modeUsed: ConvertMode = mode
  const dividerToUse: string = divider

  // Build tokens: letters map to codewords (per-letter), contiguous non-letters are preserved as single token
  const tokens: { text: string; isCodeword: boolean }[] = []
  let i = 0
  while (i < text.length) {
    const ch = text[i]
    const isLetter = /[a-zA-Z]/.test(ch)
    if (!isLetter) {
      // collect a run of non-letters
      let j = i + 1
      while (j < text.length && !/[a-zA-Z]/.test(text[j])) j++
      tokens.push({ text: text.slice(i, j), isCodeword: false })
      i = j
      continue
    }

    // single letter -> map to codeword using the selected mode
    let word: string | undefined
    if (modeUsed === 'lower') word = lower_lookup[ch.toLowerCase()]
    else if (modeUsed === 'upper') word = upper_lookup[ch.toUpperCase()]
    else if (modeUsed === 'capitalized') word = capitalized_lookup[ch.toLowerCase()]
    else if (modeUsed === 'auto') {
      if (lower_lookup[ch] !== undefined) word = lower_lookup[ch]
      else if (upper_lookup[ch] !== undefined) word = upper_lookup[ch]
    } else {
      if (lower_lookup[ch] !== undefined) word = lower_lookup[ch]
      else if (upper_lookup[ch] !== undefined) word = capitalized_lookup[ch.toLowerCase()]
    }

    tokens.push({ text: word ?? ch, isCodeword: word !== undefined })
    i++
  }

  // Build output using divider rules:
  // - if divider is empty: concatenate tokens tightly
  // - if divider is space: insert divider only between two adjacent codeword tokens
  // - otherwise: insert divider between all tokens
  if (dividerToUse === '') return tokens.map(t => t.text).join('')

  let out = ''
  for (let k = 0; k < tokens.length; k++) {
    const t = tokens[k]
    if (k === 0) { out += t.text; continue }
    const prev = tokens[k - 1]
    if (dividerToUse === ' ') {
      // insert a single space only when neither side already has whitespace
      const prevEndsWithSpace = /\s$/.test(prev.text)
      const curStartsWithSpace = /^\s/.test(t.text)
      if (!prevEndsWithSpace && !curStartsWithSpace) out += ' ' + t.text
      else out += t.text
    } else {
      out += dividerToUse + t.text
    }
  }
  return out
}

/**
 * Generate a placeholder for a number. Signature: placeholder(n, mode?, divider?)
 * mode controls the casing of the generated codewords; divider is used between parts.
 */
export function placeholder(n: number, mode: ConvertMode | undefined = 'lower', divider = '-') {
  if (!Number.isFinite(n) || !Number.isInteger(n)) throw new TypeError('placeholder: n must be an integer')
  const base = codewords.length
  const parts: string[] = []
  const major = Math.floor(n / base)
  for (let i = 0; i < major; i++) parts.push(codewords[base - 1])
  parts.push(codewords[n - major * base])

  // apply casing according to mode
  const modeKey = mode ?? 'lower'
  const transformed = parts.map(p => {
    if (modeKey === 'upper') return p.toUpperCase()
    if (modeKey === 'capitalized' || modeKey === 'auto-capitalized') return p[0].toUpperCase() + p.slice(1)
    return p // lower or auto
  })

  return transformed.join(divider)
}

export function getAlphabet() {
  const obj: Record<string, string> = {}
  for (const k of Object.keys(lower_lookup)) obj[k] = lower_lookup[k]
  for (const k of Object.keys(upper_lookup)) obj[k] = upper_lookup[k]
  return obj
}

export default {
  letters,
  codewords,
  toPhonetic,
  placeholder,
  getAlphabet,
}
