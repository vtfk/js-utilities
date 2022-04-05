const { uniqueValues } = require('../../cjs')

const array = [
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

describe('uniqueValues', () => {
  test('will return empty array when "array" not present', () => {
    const result = uniqueValues()
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(0)
  })

  test('will return empty array when "array" given as an object', () => {
    const result = uniqueValues({ prop: 'value' })
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(0)
  })

  test('will return the same array when "key" not present', () => {
    const result = uniqueValues(array)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(array.length)
  })

  test('will return only unique values (one level)', () => {
    const result = uniqueValues(array, 'SektorId')
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(2)
    expect(typeof result[0]).toBe('string')
    expect(typeof result[1]).toBe('string')
  })

  test('will return only unique values (items)', () => {
    const result = uniqueValues(array, 'SektorId', ['SeksjonId'])
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
