import { convert } from '../src/index'

test( 'convert', () => 
{
	expect( convert( 'abc' ) ).toBe('alfabravocharlie')

	expect( convert( 'abc', 0 ) ).toBe('ALFABRAVOCHARLIE')
	expect( convert( 'ABC', 0 ) ).toBe('ALFABRAVOCHARLIE')

	expect( convert( 'abc', 1 ) ).toBe('alfabravocharlie')
	expect( convert( 'ABC', 1 ) ).toBe('alfabravocharlie')

	expect( convert( 'AbC', 2 ) ).toBe('AlfabravoCharlie')

	expect( convert( '_@\"', 0 ) ).toBe('_@\"')
	expect( convert( '_@\"', 1 ) ).toBe('_@\"')
	expect( convert( '_@\"', 2 ) ).toBe('_@\"')

	expect( convert( 'abc', 0, '_' ) ).toBe('ALFA_BRAVO_CHARLIE')
	expect( convert( 'abc', 1, '_' ) ).toBe('alfa_bravo_charlie')
	expect( convert( 'AbC', 2, '_' ) ).toBe('Alfa_bravo_Charlie')

	expect( convert( 'a b c' ) ).toBe('alfa bravo charlie')
	expect( convert( 'A B c d' ) ).toBe('Alfa Bravo charlie delta')
	expect( convert( 'abc' ) ).toBe('alfabravocharlie')
})
