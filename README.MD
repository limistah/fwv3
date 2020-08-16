# Flutterwave V3

## Base API
The sdk returns a function that could be used to initialize the FW function to return a new instance of the prototype.

```js
const flwjs = require("fwjs");

const options = {};

const flw = fwjs(options);
```

Afterwards, we can use the fw to call any public function or access any property of the FW class.

## Configuration
The sdk experts that the API keys should be set as an env keys. Below are the supported names

- **FLW_ENCRYPTION_KEY** Encryption key from the dashboard
- **FLW_PUBLIC_KEY** Public key from the dashboard
- **FLW_SECRET_KEY** Secret key from the dashboard

Regardless, we can pass in our keys into the options of the `flwjs` function.

Available configurations are:

**publicKey** _string_ : The public key 
**secretKey** _string_ : The secrte key 
**encryptKey** _string_ : The encryption key
**version** _string_ : The version to use, default to "v2"
**live** _booklean_ : Live or sandbox? defaults to false (sandbox)

```js
const flwjs = require("flwjs");
// Builds up the options
const options = {
    publicKey: process.env.FLW_ENCRYPTION_KEY,
    encryptKey: process.env.FLW_PUBLIC_KEY,
    secretKey: process.env.FLW_SECRET_KEY,
    live: false,
    version: "v2",
};
// Initialzes the SDK
const flw = flwjs(options);
```

**Still In Active Development**
