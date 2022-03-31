/*
  Import dependencies
*/

module.exports = class Utilities {
  /**
   * Inspects a object and console.logs out the result
   * ONLY WORKS IN NODE
   * @param {object} obj The javascript object you want to inspect
   * @returns
   */
  static inspect (obj) {
    // Input validation
    if (!obj) { return; }
    // Import dependency
    const util = require('util');
    // Inspect and output
    console.log(util.inspect(obj, true, 1000, true));
  }

  /**
   * Decodes base64 to a string
   * @param {string} encodedString
   * @returns {string} Decoded data
   */
  static decodeBase64 (encodedString) {
    // Input validation
    if (!encodedString) { return; }
    // Create buffer from base64
    const buff = Buffer.from(encodedString, 'base64');
    // Output as utf-8
    return buff.toString('utf8');
  }

  /**
   * Takes in an object and ordered lists of how it's properties should be ordered
   * @param {object} obj The object containing the keys/properties
   * @param {String[]} startProperties A string array of what properties it should start with
   * @param {String[]} endProperties A string array of what keys/properties it should end with
   * @returns {object} A copy of the provided object with the keys in order
   */
  static createObjectWithOrderedKeys (obj, startProperties = [], endProperties = []) {
    // Input validation
    if (!obj || typeof obj !== 'object') { throw new Error('The provided object is not of type object'); }
    if (!startProperties || !Array.isArray(startProperties)) { throw new Error('startProperties is not of type Array'); }
    if (!endProperties || !Array.isArray(endProperties)) { throw new Error('endProperties is not of type Array'); }

    // Find all keys that are not matched
    const unmatchedKeys = Object.keys(obj).filter((key) => !startProperties.includes(key) && !endProperties.includes(key));

    // Combine all keys in order
    const orderedKeys = startProperties.concat(unmatchedKeys).concat(endProperties);

    // Construct a new object with the properties in order
    const newObj = {};
    orderedKeys.forEach((key) => {
      if (obj[key]) {
        newObj[key] = obj[key];
      }
    })

    // Return the new object
    return newObj;
  }

  /**
   * Recursively removes any keys in the object that matches with the keys-array
   * Outputs a new object with the matched keys removed
   * @param {object} object
   * @param {String[]} keys
   */
  static removeKeys (object, keys) {
    if (!object) return {}
    if (!keys) return object

    function _removeKeys (obj, keys) {
      for (const prop in obj) {
        if (keys.includes(prop)) {
          delete obj[prop]
          continue;
        }
        if (typeof obj[prop] === 'object') {
          if (!Array.isArray(obj[prop])) _removeKeys(obj[prop], keys, prop);
          else obj[prop].forEach((i) => _removeKeys(i, keys));
        }
      }
    }

    const copy = JSON.parse(JSON.stringify(object))
    _removeKeys(copy, keys)
    return copy
  }
}
