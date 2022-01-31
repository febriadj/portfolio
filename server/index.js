const server = require('./server');

const port = process.env.PORT || 8080;
require('./ngrok')(port);

server.listen(port);
console.log(`[${port}] server running...`);
