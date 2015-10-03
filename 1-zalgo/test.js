'use strict'

var assert = require('assert')

var multiply = require('./')

describe('1-Zalgo', function () {
  describe('multiply()', function () {
    it('should multiply 0 by 5', function (done) {
      multiply(0, function (err, val) {
        if (err) return done(err)

        assert.equal(0, val)
        done()
      })
    })

    it('should multiply 5 by 5', function (done) {
      multiply(5, function (err, val) {
        if (err) return done(err)

        assert.equal(25, val)
        done()
      })
    })

    it('should not throw an error synchronously', function (done) {
      multiply(true, function (err) {
        assert(err)
        assert.equal('`val` must be a number!', err.message)
        done()
      })
    })

    it('should not catch errors in the callback', function (done) {
      var listeners = process.listeners('uncaughtException')
      process.removeAllListeners('uncaughtException')
      process.on('uncaughtException', onUncaughtException)

      try {
        multiply(5, function () {
          throw new Error('boom')
        })
      } catch (err) {
        done(err)
      }

      function onUncaughtException(err) {
        assert.equal(err.message, 'boom')
        process.removeListener('uncaughtException', onUncaughtException)
        listeners.forEach(function (listener) {
          process.on('uncaughtException', listener)
        })
        done()
      }
    })
  })
})
