const forge = require('node-forge')
const got = require('got')

const VERSION = process.env.FW_VERSION || 'v2'

const FW_BASE_URL =
  VERSION === 'v2'
    ? 'https://api.ravepay.co/flwv3-pug/getpaidx/api'
    : 'https://api.flutterwave.com/v3'

const urls = {
  chargeCard: VERSION === 'v2' ? '/charge' : '/charges?type=card',
  validateCharge: VERSION === 'v2' ? '/validatecharge' : '/validate-charge',
  verifyCharge:
    VERSION === 'v2' ? '/v2/verify' : '/transactions/transactionId/verify'
}

/**
 *
 * @param {string} key Encryption Key from flutterwave dashboard
 * @param {string} text JSON stringified card payload
 */
function encrypt(key, text) {
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

/**
 *
 * @param {object} payload Object to convert to Flutterwave compatible payload
 * @param {boolean} encryptPayload Should the payload be encrypted?
 */
function makePayload(payload, encryptPayload = true) {
  // Converts payload to JSON
  let params = JSON.stringify(payload)
  // Encrypt the stringified payload
  let encrypted = encryptPayload
    ? encrypt(process.env.FW_ENCRYPTION_KEY, params)
    : params
  switch (encryptPayload) {
    case false:
      return { ...payload, PBFPubKey: process.env.FW_PUBLIC_KEY }
    default:
      // Standard charge encryption payload for rave v2
      return {
        alg: '3DES-24',
        PBFPubKey: process.env.FW_PUBLIC_KEY,
        client: encrypted
      }
  }
}

/**
 *
 * @param {string} uri The URI
 * @param {object} payload Object payload to send
 */
async function makeRequest(uri, payload, method = 'post') {
  try {
    const result = await got[method.toLowerCase()](`${FW_BASE_URL}${uri}`, {
      ...(payload ? { json: payload } : {}),
      hooks: {
        beforeError: [
          (error) => {
            const { response } = error
            if (response && response.body) {
              error.title = 'Payment Error'
              const body = JSON.parse(response.body)
              error.details = body.message
            }
            return error
          }
        ]
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.FW_SECRET_KEY}`
      }
    })
    return JSON.parse(result.body)
  } catch (error) {
    throw error
  }
}

// Initialize a charge
async function initCharge(payload) {
  return makeRequest(urls.chargeCard, payload)
}

// Authorize a charge
function authorizeCharge(payload) {
  return makeRequest(urls.chargeCard, payload)
}

// Validate charge using either the address or otp sent to user's address
// Nigerian/african cards uses otp.
// UK cards uses address

// Authorize a charge
// sample payload

function validateCharge(payload) {
  return makeRequest(urls.validateCharge, payload)
}

const verifyCharge = (transactionId, txRef) => {
  const url = urls.verifyCharge.replace('transactionId', transactionId)
  const payload =
    VERSION === 'v2'
      ? { txref: txRef, SECKEY: process.env.FW_SECRET_KEY }
      : null
  const method = VERSION === 'v2' ? 'POST' : 'GET'

  return makeRequest(url, payload, method)
}

module.exports = {
  makePayload,
  initCharge,
  encrypt,
  authorizeCharge,
  validateCharge,
  verifyCharge
}
