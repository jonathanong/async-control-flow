'use strict'

var fs = require('fs')

/**
 * @param {Array} filenames
 * @param {Function} callback
 * @returns {Promise}
 */

module.exports = function (filenames, callback) {
  var promise = Promise.all(filenames.map(function (filename) {
    return new Promise(function (resolve, reject) {
      fs.readFile(filename, 'utf8', function (err, string) {
        if (err) return reject(err)
        resolve(string)
      })
    })
  })).then(function (strings) {
    return strings.join('\n')
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
