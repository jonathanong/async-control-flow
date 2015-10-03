'use strict'

var assert = require('assert')
var path = require('path')
var fs = require('fs')

var readParallel = require('./')

var files = [
  path.resolve(__dirname, 'README.md'),
  path.resolve(__dirname, 'index.js'),
  __filename
]
var README = fs.readFileSync(files[0], 'utf8')
var INDEX = fs.readFileSync(files[1], 'utf8')
var TEST = fs.readFileSync(files[2])

describe('2-Parallel', function () {
  describe('readParallel()', function () {
    it('should not use the `async` module', function () {
      assert(!/\basync\b/.test(INDEX))
    })

    it('should support a callback', function (done) {
      readParallel(files, function (err, string) {
        if (err) return done(err)

        assert(~string.indexOf(README))
        assert(~string.indexOf(INDEX))
        assert(~string.indexOf(TEST))
        done()
      })
    })

    it('should return a promise', function () {
      return readParallel(files).then(function (string) {
        assert(~string.indexOf(README))
        assert(~string.indexOf(INDEX))
        assert(~string.indexOf(TEST))
      })
    })
  })
})
