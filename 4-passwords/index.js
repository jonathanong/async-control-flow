'use strict'

var crypto = require('crypto')

/**
 * @param {String} password
 * @param {String} salt
 * @param {Function} callback
 * @returns {Promise}
 */

module.exports = function (password, salt, callback) {
  if (typeof salt === 'function') {
    // optional salt argument
    callback = salt
    salt = null
  }

  var promise = Promise.resolve(salt || new Promise(function (resolve, reject) {
    crypto.randomBytes(12, function (err, buf) {
      if (err) return reject(err)
      resolve(buf.toString('base64'))
    })
  })).then(function (salt) {
    return new Promise(function (resolve, reject) {
      crypto.pbkdf2(password, salt, 4096, 512, 'sha256', function (err, hash) {
        if (err) return reject(err)

        resolve({
          salt: salt,
          hash: hash.toString('base64')
        })
      })
    })
  })

  if (typeof callback === 'function') {
    promise.then(function (val) {
      callback(null, val)
    }, function (err) {
      callback(err)
    })
  }

  return promise
}
