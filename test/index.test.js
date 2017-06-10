import hexColorPal from '../src'

test('should be array', () => {
  expect(hexColorPal).toBeDefined()
  expect(Array.isArray(hexColorPal)).toBeTruthy()
})
