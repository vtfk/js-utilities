/*
  Import dependencies
*/
const { formatRelativeDate } = require('../util/relative-date-format')
const { formatCurrency } = require('../util/currency-format')

module.exports = class Utilities {
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

  /**
   * Get only unique key values from an array with items
   * @param {Array} array Array of items to get unique values from
   * @param {String} key Key on item to get unique values for. Will return array with string values only
   * @param {Array} keys Array of which item keys to get unique items for. Will return array with items containing keys
   * @returns {Array} Array of unique values
   */
  static uniqueValues (array, key, keys) {
    if (!array || !Array.isArray(array) || array.length === 0) return []
    if (!key) return array

    const _array = []
    array.forEach(item => {
      if (!Array.isArray(keys)) {
        if (_array.includes(item[key])) return
      } else {
        const exists = _array.filter(arr => !keys.map(k => arr[k] === item[k]).includes(false))
        if (exists.length > 0) return
      }

      if (!Array.isArray(keys)) {
        _array.push(item[key])
      } else {
        const newItem = {}
        keys.forEach(k => {
          newItem[k] = item[k]
        })
        _array.push(newItem)
      }
    })

    return _array
  }

  /**
   * RelativeDateOptions
   * @typedef {Object} RelativeDateOptions
   * @property {Date|String} toDate Date object or date ISO string to format relative date from
   * @property {Date|String} [fromDate] Date object or date ISO string to be starting point (Default = new Date())
   * @property {String} [locale] Locale to format date into (Default = 'en')
   * @property {RelativeTimeFormatOptions} [options] RelativeTimeFormat options
   */

  /**
   * RelativeTimeFormat options
   * @typedef {Object} RelativeTimeFormatOptions
   * @property {"always"|"auto"} [numeric] "Always" use numeric values or "auto" choose value
   * @property {"long"|"short"|"narrow"} [style] "long" time style, "short" time style or "narrow" time style
   */

  /**
   * Formats the duration between two dates into a more readable, relative form
   * @param {RelativeDateOptions} options RelativeDate options
   * @returns The formatted string
   */
  static relativeDateFormat (options) {
    return formatRelativeDate(options)
  }

  /**
   * @typedef {Object} FormatCurrencyOptions
   * @property {Number} number Number to format
   * @property {String} [locale] Locale to format number into (Default = 'en')
   * @property {CurrencyFormatOptions} [options] CurrencyFormat options
   */

  /**
   * CurrencyFormat options
   * @typedef {Object} CurrencyFormatOptions
   * @property {"long"|"short"} [compactDisplay] Only used when notation is "compact" (Default = "short")
   * @property {String} currency The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR"
   * @property {"standard"|"accounting"} [currencySign] In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign. You can enable this formatting by setting the currencySign option to "accounting". The default value is "standard"
   * @property {Number} [minimumFractionDigits] The minimum number of fraction digits to use. Possible values are from 0 to 20 (Default = 0)
   * @property {Number} [maximumFractionDigits] The maximum number of fraction digits to use. Possible values are from 0 to 20 (the default for plain number formatting is the larger of minimumFractionDigits and 3)
   * @property {Number} [minimumSignificantDigits] The minimum number of significant digits to use. Possible values are from 1 to 21 (Default = 1)
   * @property {Number} [maximumSignificantDigits] The maximum number of significant digits to use. Possible values are from 1 to 21 (Default = 21)
   * @property {Number} [minimumIntegerDigits] The minimum number of integer digits to use. Possible values are from 1 to 21 (Default = 1)
   * @property {"compact"|"standard"|"scientific"|"engineering"} notation The formatting that should be displayed for the number (Default = "standard")
   * @property {"always"|"exceptZero"|"auto"|"never"} signDisplay When to display the sign for the number (Default = "auto")
   * @property {"long"|"short"|"narrow"} unitDisplay The unit formatting style to use in unit formatting (Default = "short")
   */

  /**
   * Format number in currency
   * @param {FormatCurrencyOptions} options FormatCurrency options
   * @returns {String} The formatted string
   */
  static currencyFormat (options) {
    return formatCurrency(options)
  }
}
