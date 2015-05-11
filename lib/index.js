'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isFunction = require( 'validate.io-function' );


// IS FUNCTION ARRAY //

/**
* FUNCTION: isFunctionArray( value )
*	Validates if a value is a function array.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is a function array
*/
function isFunctionArray( value ) {
	var len, i;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( i = 0; i < len; i++ ) {
		if ( !isFunction( value[i] ) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isFunctionArray()


// EXPORTS //

module.exports = isFunctionArray;
