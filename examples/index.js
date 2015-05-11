'use strict';

var isFunctionArray = require( './../lib' );

function beep(){}
function boop(){}
function bap(){}

console.log( isFunctionArray( [beep,boop,bap] ) );
// returns true

console.log( isFunctionArray( [] ) );
// returns false

console.log( isFunctionArray( [beep,null,bap] ) );
// returns false
