/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isFunctionArray = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-function-array', function tests() {

	function beep(){}
	function boop(){}
	function bap(){}

	it( 'should export a function', function test() {
		expect( isFunctionArray ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool;

		bool = isFunctionArray( [beep,boop,bap] );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			true,
			function(){},
			[],
			{},
			[1,2,3],
			[beep,null,bap],
			[[],[]]
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isFunctionArray( value );
		}
	});

});
