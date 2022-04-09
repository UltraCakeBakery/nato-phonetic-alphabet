export const lowercase: string[] = new Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 97  + i ) )
export const uppercase: string[] = new Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 65 + i ) )
export default { uppercase, lowercase }
