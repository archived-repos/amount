/* global describe it */

var amount = require('../amount'),
    assert = require('assert');

describe('amount', function () {

  [
    [ 9987987.111, ',', '.', 2, '9,987,987.11'],
    [ 1234.6, ',', '.', 2, '1,234.60'],
    [ 130.2588, ',', '.', 2, '130.25'],
    [ 130.2588, ',', '.', null, '130.2588'],
  ].forEach(function (params) {
    var options = params[2];

    it('' + params[0] + ' - ' + [
      params[1], params[2], params[3],
    ].join(' · ') + ' - expects: `' + params[4] + '`', function () {

      assert.strictEqual( amount(params[0], params[1], params[2], params[3]), params[4] );

    });

  });

});
