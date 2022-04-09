export const codewords = [ 'alfa', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel', 'india', 'juliett', 'kilo', 'lima', 'mike', 'november', 'oscar', 'papa', 'quebec', 'romeo', 'sierra', 'tango', 'uniform', 'victor', 'whisky', 'x-ray', 'yankee', 'zulu' ]
export const lowercase: string[] = [ ...codewords ]
export const uppercase: string[] = []
export const capitalized: string[] = []

for ( const codeword of codewords )
{
	uppercase.push( codeword.toUpperCase() )
	capitalized.push( codeword[0].toUpperCase() + codeword.slice( 1 ) )
}

export default { lowercase, uppercase, capitalized }
