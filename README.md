# nato-phonetic-alphabet &middot; [![GitHub license](https://img.shields.io/github/license/UltraCakeBakery/nato-phonetic-alphabet.svg?style=flat-square)](#LICENSE) [![npm version](https://img.shields.io/codecov/c/github/ultracakebakery/nato-phonetic-alphabet?style=flat-square)](https://www.npmjs.com/package/nato-phonetic-alphabet) ![npm](https://img.shields.io/bundlephobia/min/nato-phonetic-alphabet?style=flat-square)

This tiny npm package contains the full NATO phonetic alphabet (present "International aviation" variant).
It provides a small, efficient API:

- `toPhonetic(text, mode?, divider?)` — convert text to phonetic codewords (positional arguments)
- `placeholder(n, mode?, divider?)` — deterministic placeholder for numbers (supports negative wrapping)
- `getAlphabet()` — mapping from characters to codewords
- `LETTERS` and `CODEWORDS` constants

Learn more about [the NATO phonetic alphabet (International Aviation)](https://en.wikipedia.org/wiki/NATO_phonetic_alphabet#International_aviation)


## How to install
###### NPM
You can install this package like any other npm package:

```bash
npm install nato-phonetic-alphabet # if you are using npm
pnpm install nato-phonetic-alphabet # if you are using pnpm
yarn add nato-phonetic-alphabet # if you are using yarn
```

###### CDN (alternative)
Simply copy and paste this script tag into the `<head>` of your webpage.
Make sure to change the version from `@latest` to a fixed version like `@2.0.4`, to prevent unexpected bugs from occurring whenever we release a new version of nato-phonetic-alphabet. 

```html
<script src="https://cdn.jsdelivr.net/npm/nato-phonetic-alphabet@latest"/>
```

> Note: The link is provided by [jsDelivr - A free, fast, and reliable CDN for open source](https://www.jsdelivr.com/). Please read their [term and conditions](https://www.jsdelivr.com/terms) before you start using this link in production.

## Examples:

###### How to use as a dictionary
```javascript
import NatoPhoneticAlphabet from 'nato-phonetic-alphabet'

/* lowercase */
console.log( NatoPhoneticAlphabet['a'] ) // alfa
console.log( NatoPhoneticAlphabet['b'] ) // bravo
console.log( NatoPhoneticAlphabet['c'] ) // charlie

/* uppercase */
console.log( NatoPhoneticAlphabet['A'] ) // ALFA
console.log( NatoPhoneticAlphabet['B'] ) // BRAVO
console.log( NatoPhoneticAlphabet['C'] ) // CHARLIE
```

###### How to use `toPhonetic()`
```javascript
import { toPhonetic } from 'nato-phonetic-alphabet'

// defaults: positional API, default divider is a single space
console.log(toPhonetic('abc')) // 'alfa bravo charlie'
console.log(toPhonetic('a b c')) // 'alfa bravo charlie' // preserved spacing

// positional: toPhonetic(text, mode?, divider?)
console.log(toPhonetic('abcd', 'lower', '-')) // 'alfa-bravo-charlie-delta'
console.log(toPhonetic('ABcd', 'capitalized', '-')) // 'Alfa-Bravo-Charlie-Delta'
console.log(toPhonetic('ABcd', 'auto', '-')) // 'ALFA-BRAVO-charlie-delta'
```

###### How to use `placeholder()`
```javascript
import { placeholder } from 'nato-phonetic-alphabet'

console.log(placeholder(0)) // 'alfa'
console.log(placeholder(1)) // 'bravo'
console.log(placeholder(26)) // e.g. 'zulu-alfa'
console.log(placeholder(100)) // 'zulu-zulu-zulu-whisky'

// negative numbers wrap (convenience behavior):
console.log(placeholder(-1)) // 'zulu'

// Using `divider` (positional)
console.log(placeholder(100, undefined, '_')) // 'zulu_zulu_zulu_whisky'
```

###### Get all code words
```javascript
import { CODEWORDS } from 'nato-phonetic-alphabet'

console.log(CODEWORDS)
```

###### Get all letters
```javascript
import { LETTERS } from 'nato-phonetic-alphabet'

console.log(LETTERS)
```
