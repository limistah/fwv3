import arky from 'arky';
/**
 * Encrypts payload
 * @param {string} key Encryption Key from flutterwave dashboard
 * @param {string} text JSON stringified card payload
 */
const encrypt = (text, key = envKey) =>
  arky.encrypt(text, key, 'des-ede3-cbc', 8);

export default encrypt;
