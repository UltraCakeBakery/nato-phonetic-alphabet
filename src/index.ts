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
	const characters = [ ...text ]
	if ( mode === ConversionMode.LOWERCASE ) 
	{
		return characters.map( character => codewords.lowercase[letters.lowercase.indexOf( character.toLowerCase() )] || character ).join( divider )
	}

	if ( mode === ConversionMode.UPPERCASE ) 
	{
		return characters.map( character => codewords.uppercase[letters.uppercase.indexOf( character.toUpperCase() )] || character ).join( divider )
	}
	
	return characters.map(
		character =>
		{
			if ( letters.lowercase.includes( character ) ) return codewords.lowercase[letters.lowercase.indexOf( character )]
			if ( letters.uppercase.includes( character ) ) return codewords.capitalized[letters.uppercase.indexOf( character )]

			return character
		}
	).join( divider )
}

export function placeholder( number: number, separator: string = '-' ) : string
{
	const placeholder = []
	const major = Math.floor( number / codewords.lowercase.length )

	for ( let index = 0; index < major; index++ ) placeholder.push( codewords.lowercase[ codewords.lowercase.length - 1] )
	placeholder.push( codewords.lowercase[ number - codewords.lowercase.length * major ] )

	return placeholder.join( separator )
}

export default alphabet
