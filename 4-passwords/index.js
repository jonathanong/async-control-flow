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

  if (!salt) {
    crypto.randomBytes(12, function (err, buf) {
      // handle your error

      salt = buf.toString('base64')
    })
  }

  crypto.pbkdf2(password, salt, 4096, 512, 'sha256', function (err, hash) {
    // handle your error

    callback(null, {
      salt: salt,
      hash: hash.toString('base64')
    })
  })
}
