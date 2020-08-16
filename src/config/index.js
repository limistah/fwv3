module.exports = {
  // URLs based on the modes
  liveURL: 'https://live.com',
  sandboxURL: 'https://sandbox.com',
  // Modes that we can run
  LIVE_MODE: 'live',
  SANDBOX_MODE: 'sandbox',
  versions: ['v2', 'v3'],
  defaultVersion: 'v2',

  // Test keys
  testKeys: {
    v2: {
      secret: 'FLWSECK_TEST-66a47ad8baf9222edbffc2a5868a8e79-X',
      encrypt: 'FLWSECK_TESTd528b245a1a9',
      public: 'FLWPUBK_TEST-728bae053ffa279627a7f427691bc2cb-X'
    },
    v3: {
      secret: 'FLWSECK_TEST-SANDBOXDEMOKEY-X',
      encrypt: 'FLWSECK_TEST74e0b6c7db0e',
      public: 'FLWPUBK_TEST-SANDBOXDEMOKEY-X'
    }
  }
};
