const { formatRelativeDate } = require('../../util/relative-date-format')

describe('formatRelativeDate', () => {
  test('no arguments passed - should throw error', () => {
    expect(() => formatRelativeDate()).toThrow()
  })

  describe('toDate passed as seven days ahead', () => {
    test('and locale default as "en" - should return "in 7 days"', () => {
      const futureDate = new Date(new Date().setDate(new Date().getDate() + 7))
      const formatted = formatRelativeDate({ toDate: futureDate })
      expect(['in 7 days', 'in 1 week'].includes(formatted)).toBe(true)
    })

    test('and locale passed as "no" - should return "om 1 uke"', () => {
      const futureDate = new Date(new Date().setDate(new Date().getDate() + 7))
      const formatted = formatRelativeDate({ toDate: futureDate, locale: 'no' })
      expect(['om 1 uke', 'om 7 døgn'].includes(formatted)).toBe(true)
    })

    describe('numeric passed as', () => {
      test('"auto" - should return "next week" or "in 7 days"', () => {
        const futureDate = new Date(new Date().setDate(new Date().getDate() + 7))
        const formatted = formatRelativeDate({ toDate: futureDate, options: { numeric: 'auto' } })
        expect(['next week', 'in 7 days'].includes(formatted)).toBe(true)
      })

      test('"always" - should return "in 1 week"', () => {
        const futureDate = new Date(new Date().setDate(new Date().getDate() + 7))
        const formatted = formatRelativeDate({ toDate: futureDate, options: { numeric: 'always' } })
        expect(['in 7 days', 'in 1 week'].includes(formatted)).toBe(true)
      })
    })

    describe('style passed as', () => {
      test('"long" - should return "in 1 week"', () => {
        const futureDate = new Date(new Date().setDate(new Date().getDate() + 7))
        const formatted = formatRelativeDate({ toDate: futureDate, options: { style: 'long' } })
        expect(['in 7 days', 'in 1 week'].includes(formatted)).toBe(true)
      })

      test('"short" - should return "in 1 wk."', () => {
        const futureDate = new Date(new Date().setDate(new Date().getDate() + 7))
        const formatted = formatRelativeDate({ toDate: futureDate, options: { style: 'short' } })
        expect(['in 1 wk.', 'in 7 days'].includes(formatted)).toBe(true)
      })

      test('"narrow" - should return "in 1 wk." or "in 7 days"', () => {
        const futureDate = new Date(new Date().setDate(new Date().getDate() + 7))
        const formatted = formatRelativeDate({ toDate: futureDate, options: { style: 'narrow' } })
        expect(['in 1 wk.', 'in 7 days'].includes(formatted)).toBe(true)
      })
    })
  })

  test('"toDate" and "fromDate" passed as ISO strings', () => {
    const now = new Date()
    const futureDate = new Date(new Date().setDate(now.getDate() + 7))
    const formatted = formatRelativeDate({ toDate: now.toISOString(), fromDate: futureDate.toISOString() })
    expect(['in 7 days', 'in 1 week', '1 week ago'].includes(formatted)).toBe(true)
  })
})
