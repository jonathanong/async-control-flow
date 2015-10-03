'use strict'

var assert = require('assert')

var hash = require('./')

describe('4-Passwords', function () {
  describe('hash()', function () {
    describe('with callbacks', function () {
      it('should create the same hash with the same password and salt', function (done) {
        hash('asdfasdf', function (err, res) {
          if (err) return done(err)

          hash('asdfasdf', res.salt, function (err, res2) {
            if (err) return done(err)

            assert.equal(res2.salt, res.salt)
            assert.equal(res.hash, res2.hash)
            done()
          })
        })
      })

      it('should not create the same hash with the same password and different salt', function (done) {
        hash('asdfasdf', '1', function (err, res) {
          if (err) return done(err)

          hash('asdfasdf', '2', function (err, res2) {
            if (err) return done(err)

            assert(res.hash !== res2.hash)
            done()
          })
        })
      })

      it('should not create the same hash with different passwords and the same salt', function (done) {
        hash('asdfasdf', '1', function (err, res) {
          if (err) return done(err)

          hash('asdfasdf1', '1', function (err, res2) {
            if (err) return done(err)

            assert.equal(res.salt, '1')
            assert.equal(res2.salt, '1')
            assert(res.hash !== res2.hash)
            done()
          })
        })
      })

      it('should not create the same hash with different passwords and salts', function (done) {
        hash('asdfasdf', '1', function (err, res) {
          if (err) return done(err)

          hash('asdfasdf2', '2', function (err, res2) {
            if (err) return done(err)

            assert.equal(res.salt, '1')
            assert.equal(res2.salt, '2')
            assert(res.hash !== res2.hash)
            done()
          })
        })
      })
    })

    describe('with promises', function () {
      it('should create the same hash with the same password and salt', function () {
        return hash('asdfasdf').then(function (res) {
          return hash('asdfasdf', res.salt).then(function (res2) {
            assert.equal(res2.salt, res.salt)
            assert.equal(res.hash, res2.hash)
          })
        })
      })

      it('should not create the same hash with the same password and different salt', function () {
        return hash('asdfasdf', '1').then(function (res) {
          return hash('asdfasdf', '2').then(function (res2) {
            assert(res.hash !== res2.hash)
          })
        })
      })

      it('should not create the same hash with different passwords and the same salt', function () {
        return hash('asdfasdf', '1').then(function (res) {
          return hash('asdfasdf1', '1').then(function (res2) {
            assert.equal(res.salt, '1')
            assert.equal(res2.salt, '1')
            assert(res.hash !== res2.hash)
          })
        })
      })

      it('should not create the same hash with different passwords and salts', function () {
        return hash('asdfasdf', '1').then(function (res) {
          return hash('asdfasdf2', '2').then(function (res2) {
            assert.equal(res.salt, '1')
            assert.equal(res2.salt, '2')
            assert(res.hash !== res2.hash)
          })
        })
      })
    })
  })
})
