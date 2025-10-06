import { describe, it, test, expect } from 'vitest'
import { codewords, letters, toPhonetic, placeholder, getAlphabet } from '../src/index'

describe('NATO phonetic alphabet - combined tests', () => {
  it('alphabet mapping (lowercase & uppercase)', () => {
    const alpha = getAlphabet()
    for (let i = 0; i < 26; i++) {
      expect(alpha[letters[i]]).toBe(codewords[i])
      expect(alpha[letters[i].toUpperCase()]).toBe(codewords[i].toUpperCase())
    }
  })

  test('convert - default behaviour and basic modes', () => {
    // defaults (default divider is a single space)
  // default divider is a space, so 'abc' becomes spaced tokens
  expect(toPhonetic('abc')).toBe('alfa bravo charlie')
  expect(toPhonetic('a b c')).toBe('alfa bravo charlie')
    expect(toPhonetic('A B c d')).toBe('Alfa Bravo charlie delta')

  // default divider is now always a space unless explicitly provided
  expect(toPhonetic('abc', 'lower')).toBe('alfa bravo charlie')
  expect(toPhonetic('ABC', 'lower')).toBe('alfa bravo charlie')
  expect(toPhonetic('ABC', 'lower', '-')).toBe('alfa-bravo-charlie')

  expect(toPhonetic('abc', 'upper')).toBe('ALFA BRAVO CHARLIE')
  expect(toPhonetic('ABC', 'upper')).toBe('ALFA BRAVO CHARLIE')
  expect(toPhonetic('ABC', 'upper', '-')).toBe('ALFA-BRAVO-CHARLIE')

  expect(toPhonetic('abCD', 'capitalized')).toBe('Alfa Bravo Charlie Delta')
  expect(toPhonetic('ABcd', 'capitalized')).toBe('Alfa Bravo Charlie Delta')
  expect(toPhonetic('ABCD', 'capitalized', '-')).toBe('Alfa-Bravo-Charlie-Delta')

  expect(toPhonetic('abCD', 'auto-capitalized')).toBe('alfa bravo Charlie Delta')
  expect(toPhonetic('ABcd', 'auto-capitalized')).toBe('Alfa Bravo charlie delta')
  expect(toPhonetic('abCD', 'auto-capitalized', '-')).toBe('alfa-bravo-Charlie-Delta')
  expect(toPhonetic('ABcd', 'auto-capitalized', '-')).toBe('Alfa-Bravo-charlie-delta')

  expect(toPhonetic('abCD', 'auto')).toBe('alfa bravo CHARLIE DELTA')
  expect(toPhonetic('ABcd', 'auto')).toBe('ALFA BRAVO charlie delta')
  expect(toPhonetic('abCD', 'auto', '-')).toBe('alfa-bravo-CHARLIE-DELTA')
  expect(toPhonetic('ABcd', 'auto', '-')).toBe('ALFA-BRAVO-charlie-delta')

    // non-letter characters unchanged
    expect(toPhonetic('_@\\"', 'lower')).toBe('_@\\"')
    expect(toPhonetic('_@\\"', 'upper')).toBe('_@\\"')
    expect(toPhonetic('_@\\"', 'capitalized')).toBe('_@\\"')
    expect(toPhonetic('_@\\"', 'auto-capitalized')).toBe('_@\\"')
    expect(toPhonetic('_@\\"', 'auto')).toBe('_@\\"')
  })

  test('placeholder - basics and formatting', () => {
    expect(placeholder(0)).toBe('alfa')
    expect(placeholder(1)).toBe('bravo')
    expect(placeholder(10)).toBe('kilo')
    expect(placeholder(100)).toBe('zulu-zulu-zulu-whisky')
    expect(placeholder(100, undefined, '_')).toBe('zulu_zulu_zulu_whisky')
    expect(placeholder(100, undefined, '')).toBe('zuluzuluzuluwhisky')
  })

  it('extra edge-cases', () => {
    // empty and non-letter
  expect(toPhonetic('')).toBe('')
  expect(toPhonetic('123')).toBe('123')
  expect(toPhonetic('a1b2', 'lower', '-')).toBe('alfa-1-bravo-2')
  expect(toPhonetic('A!B@', 'upper', ' ')).toBe('ALFA ! BRAVO @')

  // negative placeholder wraps to last codeword (wrap behavior supported)
  expect(placeholder(-1)).toBe('zulu')

    // unicode and supplementary plane preservation
    expect(toPhonetic('a😀b', 'lower', '-')).toBe('alfa-😀-bravo')
    expect(toPhonetic('a𝌆b', 'lower', '-')).toBe('alfa-𝌆-bravo')
  })

  it('deterministic stress tests', () => {
    const long = 'abc'.repeat(1000)
    const out = toPhonetic(long, 'lower', '-')
    expect(out.startsWith('alfa-bravo-charlie')).toBe(true)
    expect(out.length).toBeGreaterThan(long.length)

    // placeholder large value returns string and is non-empty
    const large = placeholder(123456)
    expect(typeof large).toBe('string')
    expect(large.length).toBeGreaterThan(0)
  })
})
