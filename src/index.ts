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

export function convert( text: string, mode: ConversionMode = ConversionMode.CAPITALIZED, divider = '' ) : string
{	
	if ( mode === ConversionMode.UPPERCASE ) 
	{
		return [ ...text ].map( character => 
		{
			if ( letters.lowercase.includes( character ) ) return codewords.uppercase[letters.lowercase.indexOf( character )]
			if ( letters.uppercase.includes( character ) ) return codewords.uppercase[letters.uppercase.indexOf( character )]

			return character
		}).join( divider )
	}

	if ( mode === ConversionMode.LOWERCASE ) 
	{
		return [ ...text ].map( character => 
		{

			if ( letters.lowercase.includes( character ) ) return codewords.lowercase[letters.lowercase.indexOf( character )]
			if ( letters.uppercase.includes( character ) ) return codewords.lowercase[letters.uppercase.indexOf( character )]

			return character
		}).join( divider )
	}

	
	return [ ...text ].map( 
		character =>
		{
			if ( letters.lowercase.includes( character ) ) return codewords.lowercase[letters.lowercase.indexOf( character )]
			if ( letters.uppercase.includes( character ) ) return codewords.capitalized[letters.uppercase.indexOf( character )]

			return character
		}
	).join( divider )
}

/** Generates a string that counts up alphabetically using the phonetic alphabet. 
 * Can be used to generate html element class names, github repository names or anything that needs to look temporary and robust. 
 * */
export function placeholder( number: number, divider = '-' ) : string
{
	const placeholder = []
	const major = Math.floor( number / codewords.lowercase.length )
	const minor = number - codewords.lowercase.length * major

	for ( let index = 0; index < major; index++ ) placeholder.push( codewords.lowercase[ codewords.lowercase.length - 1] )

	placeholder.push( codewords.lowercase[ minor ] )

	return placeholder.join( divider || '-' )
}

export default alphabet
