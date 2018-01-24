/* global describe it */

var amount = require('../amount'),
    assert = require('assert');

describe('EUR', function () {

  [
    [ 9987987.111, '9 987 987,11 €'],
    [ 1234.6, '1 234,60 €'],
    [ 130.2588, '130,25 €'],
  ].forEach(function (params) {

    it('' + params[0] + ' - expects: `' + params[1] + '`', function () {

      assert.strictEqual( amount.currency(params[0], 'EUR'), params[1] );

    });

  });

});
