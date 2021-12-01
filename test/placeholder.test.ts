import { placeholder } from '../src/index'

test( 'placeholder', () => 
{
	expect( placeholder( 0 ) ).toBe( 'alfa' )
	expect( placeholder( 1 ) ).toBe( 'bravo' )
	expect( placeholder( 10 ) ).toBe( 'kilo' )
	expect( placeholder( 100 ) ).toBe( 'zulu-zulu-zulu-whisky' )
	expect( placeholder( 1000 ) ).toBe( 'zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-zulu-mike' )
	
	expect( placeholder( 100, '_' ) ).toBe( 'zulu_zulu_zulu_whisky' )
	expect( placeholder( 100, '' ) ).toBe( 'zuluzuluzuluwhisky' )
})
