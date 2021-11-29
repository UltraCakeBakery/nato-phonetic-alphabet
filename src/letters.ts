import type { Letter } from './types'

const letters: Letter[] = new Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 97 + i ) )

export default letters
