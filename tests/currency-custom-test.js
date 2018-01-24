/* global describe it */

var amount = require('../amount'),
    assert = require('assert');

describe('custom', function () {

  [
    [ 9987987.111, '9,987,987.11 €', {
      thousands_separator: ',',
      decimals_separator: '.',
      decimal_digits: 2,
      symbol: '€',
      symbol_on_left: false,
      symbol_space: ' ',
    }],
    [ 1234.6, '$1,234.60', {
      thousands_separator: ',',
      decimals_separator: '.',
      decimal_digits: 2,
      symbol: '$',
      symbol_on_left: true,
      symbol_space: '',
    }],
    [ 130.2588, '130.25 €', {
      thousands_separator: ',',
      decimals_separator: '.',
      decimal_digits: 2,
      symbol: '€',
      symbol_on_left: false,
      symbol_space: ' ',
    }],
  ].forEach(function (params) {
    var options = params[2];

    it('' + params[0] + ' - ' + [
      options.thousands_separator,
      options.decimals_separator,
      options.decimal_digits,
      options.symbol,
      options.symbol_on_left ? 'left' : 'right',
      !!options.symbol_space.length,
    ].join(' · ') + ' - expects: `' + params[1] + '`', function () {

      assert.strictEqual( amount.currency(params[0], options), params[1] );

    });

  });

});
