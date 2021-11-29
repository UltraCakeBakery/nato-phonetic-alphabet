# nato-phonetic-alphabet &middot; [![GitHub license](https://img.shields.io/github/license/UltraCakeBakery/nato-phonetic-alphabet.svg?style=flat-square)](#LICENSE) [![npm version](https://img.shields.io/npm/v/nato-phonetic-alphabet.svg?style=flat-square)](https://www.npmjs.com/package/nato-phonetic-alphabet) ![npm](https://img.shields.io/bundlephobia/min/nato-phonetic-alphabet?style=flat-square)

This tiny npm package contains the full NATO phonetic alphabet (present "International aviation" variant). 
It also comes with a handy [`convert()`](#examples) and [`placeholder()`]() function.

Learn more about [the NATO phonetic alphabet (International Aviation)](https://en.wikipedia.org/wiki/NATO_phonetic_alphabet#International_aviation)

## How to install
You can install this package like any other npm package.

```bash
npm install nato-phonetic-alphabet
yarn add nato-phonetic-alphabet
pnpm install nato-phonetic-alphabet
```


## Examples:

###### How to use as a dictionary
```javascript
import NatoPhoneticAlphabet from 'nato-phonetic-alphabet'

/* uppercase */
console.log( NatoPhoneticAlphabet['A'] ) // Alfa
console.log( NatoPhoneticAlphabet['B'] ) // Bravo
console.log( NatoPhoneticAlphabet['C'] ) // Charlie

/* lowercase */
console.log( NatoPhoneticAlphabet['a'] ) // alfa
console.log( NatoPhoneticAlphabet['b'] ) // bravo
console.log( NatoPhoneticAlphabet['c'] ) // charlie
```

###### how to use `convert()`
```javascript
import { convert } from 'nato-phonetic-alphabet'

console.log( convert( 'abc', 0 ) ) // Mike echo  <3 Lima Oscar Victor Echo  Yankee Oscar Uniform 
console.log( convert( 'abc', 1, '-' ) ) // Mike echo  <3 Lima Oscar Victor Echo  Yankee Oscar Uniform 
console.log( convert( 'abc', 2, '' ) ) // Mike echo  <3 Lima Oscar Victor Echo  Yankee Oscar Uniform 

console.log( convert( 'Hello World! I <3 you!', 2, ' ' ) ) // Mike echo  <3 Lima Oscar Victor Echo  Yankee Oscar Uniform !
```

###### how to use `placeholder()`
```javascript
import { placeholder } from 'nato-phonetic-alphabet'

console.log( placeholder( 0 ) ) // alpha
console.log( placeholder( 1 ) ) // beta
console.log( placeholder( 27 ) ) // alpha
console.log( placeholder( 100 ) ) // alpha
console.log( placeholder( 1000 ) ) // alpha
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

