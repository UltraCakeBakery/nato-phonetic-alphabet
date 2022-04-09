import _letters, { lowercase as lettersLowercase, uppercase as lettersUppercase } from './letters'
import _codewords, { lowercase as codewordsLowercase, uppercase as codewordsUppercase, capitalized as codewordsCapitalized } from './codewords'

// CAPITALIZED is last because of backwards compatibility with people who migrate from ^2.0.4
export enum ConversionMode { LOWERCASE, UPPERCASE, AUTO_CAPITALIZED, CAPITALIZED, AUTO }
export const letters = _letters
export const codewords = _codewords

const alphabet : { [key: string]: string } = {}

lettersLowercase.forEach( ( letter, index ) =>
{
	alphabet[letter] = codewordsLowercase[index]
	alphabet[letter.toUpperCase()] = codewordsUppercase[index]
})

export function convert( text: string, mode: ConversionMode = ConversionMode.AUTO_CAPITALIZED, divider = '' ) : string
{	
	const characters = [ ...text ]

	if ( mode === ConversionMode.LOWERCASE ) return characters.map( character => codewordsLowercase[lettersLowercase.indexOf( character.toLowerCase() )] || character ).join( divider )
	if ( mode === ConversionMode.UPPERCASE ) return characters.map( character => codewordsUppercase[lettersUppercase.indexOf( character.toUpperCase() )] || character ).join( divider )
	if ( mode === ConversionMode.CAPITALIZED ) return characters.map( character => codewordsCapitalized[lettersLowercase.indexOf( character )] || codewordsCapitalized[lettersUppercase.indexOf( character )] || character ).join( divider )	
	if ( mode === ConversionMode.AUTO )
	{
		return characters.map(
			character =>
			{
				const lowercaseCharacterIndex = lettersLowercase.indexOf( character )
				if ( lowercaseCharacterIndex !== -1 ) return codewordsLowercase[lowercaseCharacterIndex]
				
				const uppercaseCharacterIndex = lettersUppercase.indexOf( character )
				if ( uppercaseCharacterIndex !== -1 ) return codewordsUppercase[uppercaseCharacterIndex]
	
				return character
			}
		).join( divider )
	}
	
	return characters.map(
		character =>
		{
			const lowercaseCharacterIndex = lettersLowercase.indexOf( character )
			if ( lowercaseCharacterIndex !== -1 ) return codewordsLowercase[lowercaseCharacterIndex]
			
			const uppercaseCharacterIndex = lettersUppercase.indexOf( character )
			if ( uppercaseCharacterIndex !== -1 ) return codewordsCapitalized[uppercaseCharacterIndex]

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
