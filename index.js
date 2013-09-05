/**
 * Expose `toArray`.
 */

module.exports = toArray;

/**
 * toArray
 *
 * @param {Object}  obj Array-like or string
 * @param {Number}  index slice index
 * @return {Array} Empty Array if argument other than string or Object
 * @api public
 */

function toArray(obj, index) {
  return [].slice.call(obj, index);
}
