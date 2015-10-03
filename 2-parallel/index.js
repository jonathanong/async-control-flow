'use strict'

var parallel = require('async').parallel
var fs = require('fs')

/**
 * @param {Array} filenames
 * @param {Function} callback
 * @returns {Promise}
 */

module.exports = function (filenames, callback) {
  parallel(filenames.map(function (filename) {
    return function (done) {
      fs.readFile(filename, 'utf8', done)
    }
  }), function (err, strings) {
    if (err) return callback(err)
    callback(null, strings.join('\n'))
  })
}
