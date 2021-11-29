# nato-phonetic-alphabet
A simple npm package for that contains the full Nato Phonetic Alphabet (Present "International aviation" variant). 

Examples:

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

console.log( convert( 'Hello World! I <3 you!', 2, ' ' ) ) // Mike echo  <3 Lima Oscar Victor Echo  Yankee Oscar Uniform 

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
