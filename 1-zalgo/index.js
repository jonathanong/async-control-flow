'use strict'

/**
 * @param {Number} val
 * @param {Function} callback
 * @returns undefined
 */

module.exports = function (val, callback) {
  if (typeof val !== 'number') throw new TypeError('`val` must be a number!')
  if (val === 0) return callback(null, 0)
  callback(null, 5 * val)
}
