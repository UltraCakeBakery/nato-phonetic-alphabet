# nato-phonetic-alphabet &middot; [![GitHub license](https://img.shields.io/github/license/UltraCakeBakery/nato-phonetic-alphabet.svg?style=flat-square)](#LICENSE) [![npm version](https://img.shields.io/npm/v/nato-phonetic-alphabet.svg?style=flat-square)](https://www.npmjs.com/package/nato-phonetic-alphabet) [![npm](https://img.shields.io/bundlephobia/min/nato-phonetic-alphabet?style=flat-square)]

`
This tiny (tree shakable) npm package contains the full NATO phonetic alphabet (present "International aviation" variant). 
It also comes with a handy [`convert()`](#examples) function, that makes it very easy for you to quickly convert strings like `'a b c'` to `'alpha beta charlie'`.

Learn more about [the NATO phonetic alphabet (International Aviation)](https://en.wikipedia.org/wiki/NATO_phonetic_alphabet#International_aviation)

## Examples:

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

```javascript
import { convert } from 'nato-phonetic-alphabet'

console.log( convert( 'abc', 0 ) ) // Mike echo  <3 Lima Oscar Victor Echo  Yankee Oscar Uniform 
console.log( convert( 'abc', 1, '-' ) ) // Mike echo  <3 Lima Oscar Victor Echo  Yankee Oscar Uniform 
console.log( convert( 'abc', 2, '' ) ) // Mike echo  <3 Lima Oscar Victor Echo  Yankee Oscar Uniform 

console.log( convert( 'Hello World! I <3 you!', 2, ' ' ) ) // Mike echo  <3 Lima Oscar Victor Echo  Yankee Oscar Uniform !

```

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

