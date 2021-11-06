const ngrok = require('ngrok');

module.exports = async (port) => {
  try {
    const url = await ngrok.connect({
      proto: 'http',
      addr: port,
      authtoken: process.env.NGROK_AUTH_TOKEN,
    });

    console.log(`Ngrok Tunnel: ${url}`);
  }
  catch (error0) {
    console.error(error0.message);
  }
}
