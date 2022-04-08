const { uniqueValues } = require('../../lib/utilities')
const { uniqueValues: uniqueValuesES } = require('../../lib/utilities_es')
const funcs = {
  cjs: uniqueValues,
  es: uniqueValuesES
}

const itemArray = [
  {
    Id: 'BDK',
    SeksjonId: '',
    Sektor: '',
    SektorId: 'BDK',
    Team: '',
    TeamId: '',
    Seksjon: ''
  },
  {
    Id: 'BDK-ARK',
    SeksjonId: 'BDK-ARK',
    Sektor: '',
    SektorId: 'BDK',
    Team: '',
    TeamId: '',
    Seksjon: 'Arkiv og dokumenthåndtering'
  },
  {
    Id: 'KRIF-KARV',
    SeksjonId: 'KRIF-KARV',
    Sektor: '',
    SektorId: 'KRIF',
    Team: '',
    TeamId: '',
    Seksjon: 'Kulturarv'
  },
  {
    Id: 'KRIF-KARV-ARK',
    SeksjonId: 'KRIF-KARV',
    Sektor: '',
    SektorId: 'KRIF',
    Team: '',
    TeamId: '',
    Seksjon: 'Kulturarv'
  }
]

const booleanArray = [
  true,
  false,
  false,
  true,
  false,
  true
]

const numberArray = [
  1,
  1,
  1,
  2,
  2,
  2,
  3,
  4,
  4,
  4,
  4
]

const stringArray = [
  'One',
  'One',
  'One',
  'Two',
  'Two',
  'Two',
  'Two',
  'Two',
  'Two',
  'Two',
  'Two',
  'Three',
  'Three',
  'Three',
  'Three',
  'Three',
  'Three',
  'Three',
  'Three',
  'Three',
  'Three',
  'Three',
  'Three',
  'Three',
  'Four'
]

// make sure uniqueValues works the same way in both "utilities" and "utilities_es"
Object.getOwnPropertyNames(funcs).forEach(func => {
  describe(`uniqueValues (${func})`, () => {
    test('will return empty array when "array" not present', () => {
      const result = funcs[func]()
      expect(Array.isArray(result)).toBe(true)
      expect(result.length).toBe(0)
    })

    test('will return empty array when "array" given as an object', () => {
      const result = funcs[func]({ array: { prop: 'value' } })
      expect(Array.isArray(result)).toBe(true)
      expect(result.length).toBe(0)
    })

    test('when "key" and "keys" not present and "array" has items - will return empty array', () => {
      const result = funcs[func]({ array: itemArray })
      expect(Array.isArray(result)).toBeTruthy()
      expect(result.length).toBe(0)
    })

    test('when "key" and "keys" not present and "array" has booleans - will return flat array with unique values', () => {
      const result = funcs[func]({ array: booleanArray })
      expect(Array.isArray(result)).toBe(true)
      expect(result.length).toBe(2)
    })

    test('when "key" and "keys" not present and "array" has numbers - will return flat array with unique values', () => {
      const result = funcs[func]({ array: numberArray })
      expect(Array.isArray(result)).toBe(true)
      expect(result.length).toBe(4)
    })

    test('when "key" and "keys" not present and "array" has string - will return flat array with unique values', () => {
      const result = funcs[func]({ array: stringArray })
      expect(Array.isArray(result)).toBe(true)
      expect(result.length).toBe(4)
    })

    test('will return only unique values (one level)', () => {
      const result = funcs[func]({ array: itemArray, key: 'SektorId' })
      expect(Array.isArray(result)).toBe(true)
      expect(result.length).toBe(2)
      expect(typeof result[0]).toBe('string')
      expect(typeof result[1]).toBe('string')
    })

    test('will return only unique values (items)', () => {
      const result = funcs[func]({ array: itemArray, key: 'SektorId', keys: ['SeksjonId'] })
      expect(Array.isArray(result)).toBe(true)
      expect(result.length).toBe(3)
      expect(typeof result[0]).toBe('object')
      expect(typeof result[1]).toBe('object')
      expect(typeof result[2]).toBe('object')
      expect(Object.getOwnPropertyNames(result[0]).length).toBe(1)
      expect(Object.getOwnPropertyNames(result[1]).length).toBe(1)
      expect(Object.getOwnPropertyNames(result[2]).length).toBe(1)
      expect(Object.getOwnPropertyNames(result[0])[0]).toBe('SeksjonId')
      expect(Object.getOwnPropertyNames(result[1])[0]).toBe('SeksjonId')
      expect(Object.getOwnPropertyNames(result[2])[0]).toBe('SeksjonId')
    })
  })
})
