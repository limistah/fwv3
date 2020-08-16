import forge from 'node-forge'
import crypto from 'crypto'

/**
 * Encryption algorithm
 * @param {string} key Encryption Key from flutterwave dashboard
 * @param {string} text JSON stringified card payload
 */
function encrypt(key, text) {
  if (key.length !== 24) {
    return false
  }
  const cipher = forge.cipher.createCipher(
    '3DES-ECB',
    forge.util.createBuffer(key)
  )
  cipher.start({
    iv: ''
  })
  cipher.update(forge.util.createBuffer(text, 'utf-8'))
  cipher.finish()
  const encrypted = cipher.output
  return forge.util.encode64(encrypted.getBytes())
}

export default encrypt
