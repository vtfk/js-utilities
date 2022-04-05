const { formatCurrency } = require('../../util/currency-format')

describe('formatCurrency', () => {
  test('no arguments passed - should throw error', () => {
    expect(() => formatCurrency()).toThrow()
  })

  describe('currency as', () => {
    test('"NOK"', () => {
      const formatted = formatCurrency({ number: 69, options: { currency: 'NOK' } })
      expect(formatted === 'NOK 69.00').toBeTruthy()
    })

    test('"USD"', () => {
      const formatted = formatCurrency({ number: 69, options: { currency: 'USD' } })
      expect(formatted === '$69.00').toBeTruthy()
    })
  })

  describe('minimumFractionDigits', () => {
    test('as 5', () => {
      const formatted = formatCurrency({ number: 69, options: { currency: 'NOK', minimumFractionDigits: 5 } })
      expect(formatted === 'NOK 69.00000').toBeTruthy()
    })

    test('as 0', () => {
      const formatted = formatCurrency({ number: 69, options: { currency: 'NOK', minimumFractionDigits: 0 } })
      expect(formatted === 'NOK 69').toBeTruthy()
    })
  })

  describe('minimumSignificantDigits', () => {
    test('as 5', () => {
      const formatted = formatCurrency({ number: 69, options: { currency: 'NOK', minimumSignificantDigits: 5 } })
      expect(formatted === 'NOK 69.000').toBeTruthy()
    })

    test('as 1', () => {
      const formatted = formatCurrency({ number: 69, options: { currency: 'NOK', minimumSignificantDigits: 1 } })
      expect(formatted === 'NOK 69').toBeTruthy()
    })
  })

  describe('minimumIntegerDigits', () => {
    test('as 5', () => {
      const formatted = formatCurrency({ number: 69, options: { currency: 'NOK', minimumIntegerDigits: 5 } })
      expect(formatted === 'NOK 00,069.00').toBeTruthy()
    })

    test('as 1', () => {
      const formatted = formatCurrency({ number: 69, options: { currency: 'NOK', minimumIntegerDigits: 1 } })
      expect(formatted === 'NOK 69.00').toBeTruthy()
    })
  })
})
