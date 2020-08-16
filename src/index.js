/**
 * Hey, welcome.
 * You won't find anything magical, just basic stuffs.
 * Still, we will use some es6, 7, 8 features.
 * So, brace up.
 *
 * Written by Aleem Isiaka(https://twitter.com/limistah)
 */

import config from './config';
import encryptor from './utils/encrypt';

function FW(options = {}) {
  // Version is supported?
  const isVersionSupported = config.versions.includes(
    options && options.version
  );

  const defaultKeyVersion = isVersionSupported
    ? options.version
    : config.defaultVersion;
  // Default env keys if version is not supported.
  const defaultKeys = config.testKeys[defaultKeyVersion];
  // Prepend falsy fields
  const { publicKey, secretKey, encryptKey, version, mode } = Object.assign(
    {},
    options,
    {
      publicKey: defaultKeys.public,
      secretKey: defaultKeys.secret,
      encryptKey: defaultKeys.encrypt,
      version: defaultKeyVersion,
      mode: config.SANDBOX_MODE
    }
  );

  // Set the keys on the instance
  this.PUBLIC_KEY = process.env.FW_PUBLIC_KEY || publicKey;
  this.SECRET_KEY = process.env.FW_SECRET_KEY || secretKey;
  this.ENCRYPTION_KEY = process.env.FW_ENCRYPTION_KEY || encryptKey;
  this.MODE = mode;
  this.VERSION = version;

  return this;
}

const prototype = {
  baseURL: config.sandboxURL,
  setBaseURL(mode = config.SANDBOX_MODE) {
    if (mode === config.LIVE_MODE) {
      this.baseURL = config.liveURL;
    } else {
      this.baseURL = config.sandboxURL;
    }
    return this;
  },
  encrypt(text) {
    return encryptor(text, this.ENCRYPTION_KEY);
  },
  /**
   *
   * @param {object} payload Object to convert to Flutterwave compatible payload
   * @param {boolean} encryptPayload Should the payload be encrypted?
   */
  makePayload(payload, encryptPayload = true) {
    // Converts payload to JSON
    let params = JSON.stringify(payload);
    // Encrypt the stringified payload
    let encrypted = encryptPayload ? this.encrypt(params) : params;
    if (encryptPayload) {
      return {
        alg: '3DES-24',
        PBFPubKey: this.PUBLIC_KEY,
        client: encrypted
      };
    }
    return { ...payload, PBFPubKey: this.PUBLIC_KEY };
  }
};

FW.prototype = prototype;

// always return a new prototype
// We can have as many FW instance as we want pointing to different prototype object
const fw = (args) => new FW();

// Usage
// after import call the exported function (fw, in this case)
const _fw = fw();
// Instantiate it again.
const __fw = fw();

//
console.log(_fw.baseURL);

// Try setting the base URL
_fw.setBaseURL(config.LIVE_MODE);

console.log(_fw.baseURL); // Outputs the live URL
console.log(__fw.baseURL); // outputs the sandbox URL (different prototype)
console.log(_fw.encrypt('what are we trying?')); // Encryption
console.log(_fw.makePayload({ cardNumber: 'String' }, false)); // Payload maker

module.exports = fw;
