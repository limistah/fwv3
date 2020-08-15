const styleguidist = require("react-styleguidist");
styleguidist(require("./styleguide.config.js")).server((err, config) => {
  if (err) {
    console.log(err);
  } else {
    const url = `http://${config.serverHost}:${config.serverPort}`;
    console.log(`Listening at ${url}`);
  }
});
