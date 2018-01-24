/* global describe it */

var amount = require('../amount'),
    assert = require('assert');

describe('USD', function () {

  [
    [ 9987987.111, '$9,987,987.11'],
    [ 1234.6, '$1,234.60'],
    [ 130.2588, '$130.25'],
  ].forEach(function (params) {

    it('' + params[0] + ' - expects: `' + params[1] + '`', function () {

      assert.strictEqual( amount.currency(params[0], 'USD'), params[1] );

    });

  });

});
