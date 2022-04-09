import { ConversionMode, convert } from '../src/index'

test( 'convert', () => 
{
	// defaults
	expect( convert( 'abc' ) ).toBe( 'alfabravocharlie' )
	expect( convert( 'a b c' ) ).toBe( 'alfa bravo charlie' )
	expect( convert( 'A B c d' ) ).toBe( 'Alfa Bravo charlie delta' )

	expect( convert( 'abc', ConversionMode.LOWERCASE ) ).toBe( 'alfabravocharlie' )
	expect( convert( 'ABC', ConversionMode.LOWERCASE ) ).toBe( 'alfabravocharlie' )
	expect( convert( 'ABC', ConversionMode.LOWERCASE, '-' ) ).toBe( 'alfa-bravo-charlie' )
	
	expect( convert( 'abc', ConversionMode.UPPERCASE ) ).toBe( 'ALFABRAVOCHARLIE' )
	expect( convert( 'ABC', ConversionMode.UPPERCASE ) ).toBe( 'ALFABRAVOCHARLIE' )
	expect( convert( 'ABC', ConversionMode.UPPERCASE, '-' ) ).toBe( 'ALFA-BRAVO-CHARLIE' )
	
	expect( convert( 'abCD', ConversionMode.CAPITALIZED ) ).toBe( 'AlfaBravoCharlieDelta' )
	expect( convert( 'ABcd', ConversionMode.CAPITALIZED ) ).toBe( 'AlfaBravoCharlieDelta' )
	expect( convert( 'ABCD', ConversionMode.CAPITALIZED, '-' ) ).toBe( 'Alfa-Bravo-Charlie-Delta' )

	expect( convert( 'abCD', ConversionMode.AUTO_CAPITALIZED ) ).toBe( 'alfabravoCharlieDelta' )
	expect( convert( 'ABcd', ConversionMode.AUTO_CAPITALIZED ) ).toBe( 'AlfaBravocharliedelta' )
	expect( convert( 'abCD', ConversionMode.AUTO_CAPITALIZED, '-' ) ).toBe( 'alfa-bravo-Charlie-Delta' )
	expect( convert( 'ABcd', ConversionMode.AUTO_CAPITALIZED, '-' ) ).toBe( 'Alfa-Bravo-charlie-delta' )
	
	expect( convert( 'abCD', ConversionMode.AUTO ) ).toBe( 'alfabravoCHARLIEDELTA' )
	expect( convert( 'ABcd', ConversionMode.AUTO ) ).toBe( 'ALFABRAVOcharliedelta' )
	expect( convert( 'abCD', ConversionMode.AUTO, '-' ) ).toBe( 'alfa-bravo-CHARLIE-DELTA' )
	expect( convert( 'ABcd', ConversionMode.AUTO, '-' ) ).toBe( 'ALFA-BRAVO-charlie-delta' )

	expect( convert( '_@\\"', ConversionMode.LOWERCASE ) ).toBe( '_@\\"' )
	expect( convert( '_@\\"', ConversionMode.UPPERCASE ) ).toBe( '_@\\"' )
	expect( convert( '_@\\"', ConversionMode.CAPITALIZED ) ).toBe( '_@\\"' )
	expect( convert( '_@\\"', ConversionMode.AUTO_CAPITALIZED ) ).toBe( '_@\\"' )
	expect( convert( '_@\\"', 4 ) ).toBe( '_@\\"' )
})
