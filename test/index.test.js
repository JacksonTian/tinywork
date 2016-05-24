'use strict';

var expect = require('expect.js');
var tinywork = require('../lib/index');

describe('tinywork', function () {
  it('array should ok', function* () {
    var arr = yield tinywork.array([
      Promise.resolve(1),
      Promise.resolve(2),
      'c'
    ]);
    expect(arr).to.eql([1, 2, 'c']);
  });

  it('object should ok', function* () {
    var obj = yield tinywork.object({
      a: Promise.resolve(1),
      b: Promise.resolve(2),
      c: 'c'
    });
    expect(obj).to.eql({
      a: 1,
      b: 2,
      c: 'c'
    });
  });
});
