import { describe, it, expect } from 'vitest'
import { toPhonetic, placeholder } from '../src/index'

describe('argument-defaults and heuristics', () => {
  it('toPhonetic: only text -> space divider by default', () => {
    expect(toPhonetic('abc')).toBe('alfa bravo charlie')
    expect(toPhonetic('A B c')).toBe('Alfa Bravo charlie')
  })

  it('toPhonetic: mode provided but no divider -> still uses space by default', () => {
    expect(toPhonetic('abc', 'lower')).toBe('alfa bravo charlie')
    expect(toPhonetic('ABC', 'upper')).toBe('ALFA BRAVO CHARLIE')
  })

  it('toPhonetic: explicit divider always used', () => {
    expect(toPhonetic('abc', 'lower', '-')).toBe('alfa-bravo-charlie')
    expect(toPhonetic('A!B@', 'upper', ' ')).toBe('ALFA ! BRAVO @')
  })

  it('placeholder supports mode and divider explicitly', () => {
    // default placeholder behavior (lowercase, '-' divider)
    const p = placeholder(100)
    expect(typeof p).toBe('string')
    expect(p).toContain('zulu')

  // explicit mode without divider should keep the default '-' divider
  const up = placeholder(100, 'upper')
  expect(up).toBe(p.toUpperCase())

    // explicit divider
    expect(placeholder(100, undefined, '_')).toContain('_')
  })
})
