import { convert } from '../dist/index.js'
import FS from 'fs'

const text = FS.readFileSync( './benchmark/sample.txt' ).toString()

console.time( 1 )
convert( text )
console.timeEnd( 1 )

console.time( 10 )
for ( let i = 0; i < 10; i++ ) convert( text )
console.timeEnd( 10 )

console.time( 100 )
for ( let i = 0; i < 100; i++ ) convert( text )
console.timeEnd( 100 )

console.time( 1000 )
for ( let i = 0; i < 1000; i++ ) convert( text )
console.timeEnd( 1000 )

console.time( 10000 )
for ( let i = 0; i < 10000; i++ ) convert( text )
console.timeEnd( 10000 )

