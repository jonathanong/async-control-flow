'use strict'

var assert = require('assert')

var parallel = require('./')

describe('3-Promise-Object-Parallel', function () {
  describe('paralle()', function () {
    it('should resolve all the promises in an object', function () {
      return parallel({
        one: Promise.resolve(1),
        two: Promise.resolve(2),
        three: Promise.resolve(3)
      }).then(function (val) {
        assert.deepEqual(val, {
          one: 1,
          two: 2,
          three: 3
        })
      })
    })

    it('should support non-promise values', function () {
      return parallel({
        one: 1,
        two: Promise.resolve(2),
        three: Promise.resolve(3)
      }).then(function (val) {
        assert.deepEqual(val, {
          one: 1,
          two: 2,
          three: 3
        })
      })
    })
  })
})
