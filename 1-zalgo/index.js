'use strict'

/**
 * @param {Number} val
 * @param {Function} callback
 * @returns undefined
 */

module.exports = function (val, callback) {
  setImmediate(function () {
    if (typeof val !== 'number') return callback(new TypeError('`val` must be a number!'))
    callback(null, 5 * val)
  })
}
