'use strict'

/**
 * @param {Object} obj
 * @returns {Promise}
 */

module.exports = function (obj) {
  var result = {}
  return Promise.all(Object.keys(obj).map(function (key) {
    return Promise.resolve(obj[key]).then(function (val) {
      result[key] = val
    })
  })).then(function () {
    return result
  })
}
