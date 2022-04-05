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
 * Format currency
 * @param {String} locale Locale to format currency into
 * @param {CurrencyFormatOptions} options CurrencyFormat options
 * @returns {String}
 */
const getCurrencyFormatter = (locale, options) => {
  return new Intl.NumberFormat(locale, { ...options, style: 'currency' })
}

/**
 * Format number in currency
 * @param {FormatCurrencyOptions} options FormatCurrency options
 * @returns {String} The formatted string
 */
module.exports.formatCurrency = ({ number, locale = 'en', options = undefined }) => {
  if (Number.isNaN(number)) throw new Error('Pass a number')

  const FORMATTER = getCurrencyFormatter(locale, options)
  return FORMATTER.format(number).replace('\xa0', ' ') // replace char code 160 (&nbsp;) with regular space
}
