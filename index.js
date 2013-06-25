/**
 * Expose `toArray`.
 */

module.exports = toArray;

/**
 * toArray
 * @return {Array} Empty Array if argument other than string or Object
 * @api public
 */

function toArray(like) {
  return [].slice.call(like);
}
