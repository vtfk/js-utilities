const { formatRelativeDate } = require('../../util/relative-date-format')

/* formatRelativeDate(new Date(), new Date(), 'en', {

}) */

describe('formatRelativeDate', () => {
  test('no arguments passed - should throw error', () => {
    expect(() => formatRelativeDate()).toThrow()
  })

  describe('toDate passed as seven days ahead', () => {
    test('and locale default as "en" - should return "in 7 days"', () => {
      const futureDate = new Date(new Date().setDate(new Date().getDate() + 7))
      const formatted = formatRelativeDate(futureDate)
      expect(formatted).toBe('in 7 days' || 'in 1 week')
    })

    test('and locale passed as "no" - should return "om 1 uke"', () => {
      const futureDate = new Date(new Date().setDate(new Date().getDate() + 7))
      const formatted = formatRelativeDate(futureDate, new Date(), 'no')
      expect(formatted).toBe('om 1 uke' || 'om 7 døgn')
    })

    describe('numeric passed as', () => {
      test('"auto" - should return "next week" or "in 7 days"', () => {
        const futureDate = new Date(new Date().setDate(new Date().getDate() + 7))
        const formatted = formatRelativeDate(futureDate, new Date(), 'en', { numeric: 'auto' })
        expect(formatted).toBe('next week' || 'in 7 days')
      })

      test('"always" - should return "in 1 week"', () => {
        const futureDate = new Date(new Date().setDate(new Date().getDate() + 7))
        const formatted = formatRelativeDate(futureDate, new Date(), 'en', { numeric: 'always' })
        expect(formatted).toBe('in 1 week')
      })
    })

    describe('style passed as', () => {
      test('"long" - should return "in 1 week"', () => {
        const futureDate = new Date(new Date().setDate(new Date().getDate() + 7))
        const formatted = formatRelativeDate(futureDate, new Date(), 'en', { style: 'long' })
        expect(formatted).toBe('in 1 week')
      })

      test('"short" - should return "in 1 wk."', () => {
        const futureDate = new Date(new Date().setDate(new Date().getDate() + 7))
        const formatted = formatRelativeDate(futureDate, new Date(), 'en', { style: 'short' })
        expect(formatted).toBe('in 1 wk.')
      })

      test('"narrow" - should return "in 1 wk." or "in 7 days"', () => {
        const futureDate = new Date(new Date().setDate(new Date().getDate() + 7))
        const formatted = formatRelativeDate(futureDate, new Date(), 'en', { style: 'narrow' })
        expect(formatted).toBe('in 1 wk.' || 'in 7 days')
      })
    })
  })
})
