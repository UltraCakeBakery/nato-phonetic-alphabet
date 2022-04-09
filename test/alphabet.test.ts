import NatoPhoneticAlphabet, { codewords, letters } from '../src/index'

test( 'placeholder', () => 
{
	for ( let i = 0; i < 26; i++ )
	{
		expect( NatoPhoneticAlphabet[letters.lowercase[i]] ).toBe( codewords.lowercase[i] )
		expect( NatoPhoneticAlphabet[letters.uppercase[i]] ).toBe( codewords.uppercase[i] )
	}
})

console.log( NatoPhoneticAlphabet )
