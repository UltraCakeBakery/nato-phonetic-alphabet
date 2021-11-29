import { convert } from '../src/index'

test( 'convert', () => 
{
	expect( convert( 'abc' ) ).toBe('alfabravocharlie')

	expect( convert( 'abc', 0 ) ).toBe('ALFABRAVOCHARLIE')
	expect( convert( 'abc', 1 ) ).toBe('alfabravocharlie')
	expect( convert( 'AbC', 2 ) ).toBe('AlfabravoCharlie')

	expect( convert( 'abc', 0, '_' ) ).toBe('ALFA_BRAVO_CHARLIE')
	expect( convert( 'abc', 1, '_' ) ).toBe('alfa_bravo_charlie')
	expect( convert( 'AbC', 2, '_' ) ).toBe('Alfa_bravo_Charlie')

	expect( convert( 'a b c' ) ).toBe('alfa bravo charlie')
	expect( convert( 'A B c d' ) ).toBe('Alfa Bravo charlie delta')
	expect( convert( 'abc' ) ).toBe('alfabravocharlie')
})
