# nato-phonetic-alphabet &middot; [![GitHub license](https://img.shields.io/github/license/UltraCakeBakery/nato-phonetic-alphabet.svg?style=flat-square)](#LICENSE) [![npm version](https://img.shields.io/codecov/c/github/ultracakebakery/nato-phonetic-alphabet?style=flat-square)](https://www.npmjs.com/package/nato-phonetic-alphabet) ![npm](https://img.shields.io/bundlephobia/min/nato-phonetic-alphabet?style=flat-square)

This tiny npm package contains the full NATO phonetic alphabet (present "International aviation" variant). 
It also comes with a handy [`convert()`](#how-to-use-convert) and [`placeholder()`](#how-to-use-placeholder) function.

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

###### how to use `convert()`
```javascript
import { convert } from 'nato-phonetic-alphabet'

console.log( convert( 'a b c d', ConversionMode.LOWERCASE ) ) // alfa bravo charlie delta
console.log( convert( 'a b c d', ConversionMode.UPPERCASE ) ) // ALFA BRAVO CHARLIE DELTA
console.log( convert( 'A B c d', ConversionMode.CAPITALIZED ) ) // Alfa Bravo Charlie Delta
console.log( convert( 'A B c d', ConversionMode.AUTO ) ) // ALFA BRAVO charlie delta
console.log( convert( 'A B c d', ConversionMode.AUTO_CAPITALIZED ) ) // Alfa Bravo charlie delta

// Using `seperator` option
console.log( convert( 'abcd', ConversionMode.LOWERCASE, '-' ) ) // alfa-bravo-charlie-delta
console.log( convert( 'abcd', ConversionMode.UPPERCASE, '-' ) ) // ALFA-BRAVO-CHARLIE-DELTA
console.log( convert( 'ABcd', ConversionMode.CAPITALIZED, '-' ) ) // Alfa-Bravo-Charlie-Delta 
console.log( convert( 'ABcd', ConversionMode.AUTO, '-' ) ) // ALFA-BRAVO-charlie-delta 
console.log( convert( 'ABcd', ConversionMode.AUTO_CAPITALIZED, '-' ) ) // ALFA-BRAVO-Charlie-Delta 

console.log( convert( 'Hello World! I <3 you!', 2, ' ' ) ) // Hotel echo lima lima oscar   Whisky oscar romeo lima delta !   India   < 3   yankee oscar uniform !
```

###### how to use `placeholder()`
```javascript
import { placeholder } from 'nato-phonetic-alphabet'

console.log( placeholder( 0 ) ) // alpha
console.log( placeholder( 1 ) ) // beta
console.log( placeholder( 26 ) ) // zulu-alpha
console.log( placeholder( 100 ) ) // zulu-zulu-zulu-whisky
console.log( placeholder( 1000 ) ) // zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-mike

// Using `divider` option
console.log( placeholder( 100, '_' ) ) // zulu_zulu_zulu_whisky
```

###### Get all code words
```javascript
import { codeWords } from 'nato-phonetic-alphabet'

console.log( codeWords.capitalized )
// [
//   'Alfa',    'Bravo',    'Charlie',
//   'Delta',   'Echo',     'Foxtrot',
//   'Golf',    'Hotel',    'India',
//   'Juliett', 'Kilo',     'Lima',
//   'Mike',    'November', 'Oscar',
//   'Papa',    'Quebec',   'Romeo',
//   'Sierra',  'Tango',    'Uniform',
//   'Victor',  'Whisky',   'X-ray',
//   'Yankee',  'Zulu'
// ]
```

###### Get all letters
```javascript
import { letters } from 'nato-phonetic-alphabet'

console.log( letters.uppercase )
// [
//     'A', 'B', 'C', 'D', 'E', 'F',
//     'G', 'H', 'I', 'J', 'K', 'L',
//     'M', 'N', 'O', 'P', 'Q', 'R',
//     'S', 'T', 'U', 'V', 'W', 'X',
//     'Y', 'Z'
// ]

```
