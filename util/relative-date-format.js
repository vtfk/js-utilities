const DIVISIONS = [
  { amount: 60, name: 'seconds' },
  { amount: 60, name: 'minutes' },
  { amount: 24, name: 'hours' },
  { amount: 7, name: 'days' },
  { amount: 4.34524, name: 'weeks' },
  { amount: 12, name: 'months' },
  { amount: Number.POSITIVE_INFINITY, name: 'years' }
]

/**
 * RelativeDateOptions
 * @typedef {Object} RelativeDateOptions
 * @property {Date} toDate Date object to format relative date from
 * @property {Date} [fromDate] Date object to be starting point (Default = new Date())
 * @property {String} [locale] Locale to format date into (Default = 'en')
 * @property {RelativeTimeFormatOptions} [options] RelativeTimeFormat options
 */

/**
 * RelativeTimeFormat options
 * @typedef {Object} RelativeTimeFormatOptions
 * @property {"always"|"auto"} [numeric] "Always" use numeric values or "auto" choose value
 * @property {"long"|"short"|"narrow"} [style] "long" time style, "short" time style or "narrow" time style
 */

const getRelativeTimeFormatter = (locale, options) => {
  return new Intl.RelativeTimeFormat(locale, options)
}

/**
 * Formats the duration between two dates into a more readable, relative form
 * @param {RelativeDateOptions} options RelativeDate options
 * @returns The formatted string
 */
module.exports.formatRelativeDate = ({ toDate, fromDate = new Date(), locale = 'en', options = undefined }) => {
  if (toDate === null || toDate === undefined) throw new Error('Pass at least "toDate"')

  const FORMATTER = getRelativeTimeFormatter(locale, options)
  let duration = (toDate - fromDate) / 1000

  for (let i = 0; i < DIVISIONS.length; i++) {
    const division = DIVISIONS[i]
    if (Math.abs(duration) < division.amount) {
      return FORMATTER.format(Math.round(duration), division.name)
    }
    duration /= division.amount
  }
}
