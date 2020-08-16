const encrypt = require('../../../utils/encrypt').default

describe('utils/encrypt.js', () => {
  const KEY = 'THE_ENCRYPTION_KEY'
  const _KEY = 'FLWSECK_TEST2d34d5de933c'
  const text = 'This is a pretty long string'

  test('should not encrypt if key is less than 24', () => {
    const encrypted = encrypt('THIS', text)
    expect(encrypted).toBeFalsy()
  })

  test('should encrypt a payload', () => {
    const encrypted = encrypt(_KEY, text)
    expect(text).toBeTruthy()
    expect(text).toEqual(expect.not.stringMatching(encrypted))
  })
})
