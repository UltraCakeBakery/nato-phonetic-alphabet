import _letters from './letters'
import _codeWords from './codeWords'
import type { Letters, CodeWords, Alphabet } from './types'
import { ConversionMode } from './types'

export const letters: Letters = {
	lowercase: _letters.map( letter => letter.toLowerCase() ),
	uppercase: _letters.map( letter => letter.toUpperCase() )
}

export const codewords: CodeWords = {
	lowercase: _codeWords.map( codeword => codeword.toLowerCase() ),
	uppercase: _codeWords.map( codeword => codeword.toUpperCase() ),
	capitalized: _codeWords.map( codeword => codeword[0].toUpperCase() + codeword.slice( 1 ) )
}

const alphabet : Alphabet = {}

_letters.forEach( ( letter, index ) =>
{
	alphabet[letter] = _codeWords[index]
	alphabet[letter.toLowerCase()] = _codeWords[index].toLowerCase()
})

export function convert( text: string, mode: ConversionMode = ConversionMode.CAPITALIZED, afterCodeword = '' ) : string
{	
	if ( mode === ConversionMode.UPPERCASE ) 
	{
		return [ ...text ].map( character => 
		{
			if ( letters.lowercase.includes( character ) ) return codewords.uppercase[letters.lowercase.indexOf( character )] + afterCodeword
			if ( letters.uppercase.includes( character ) ) return codewords.uppercase[letters.uppercase.indexOf( character )] + afterCodeword

			return character
		}).join( '' )
	}

	if ( mode === ConversionMode.LOWERCASE ) 
	{
		return [ ...text ].map( character => 
		{

			if ( letters.lowercase.includes( character ) ) return codewords.lowercase[letters.lowercase.indexOf( character )] + afterCodeword
			if ( letters.uppercase.includes( character ) ) return codewords.lowercase[letters.uppercase.indexOf( character )] + afterCodeword

			return character
		}).join( '' )
	}

	
	return [ ...text ].map( 
		character =>
		{
			if ( letters.lowercase.includes( character ) ) return codewords.lowercase[letters.lowercase.indexOf( character )] + afterCodeword
			if ( letters.uppercase.includes( character ) ) return codewords.capitalized[letters.uppercase.indexOf( character )] + afterCodeword

			return character
		}
	).join( '' )
}

export default alphabet
