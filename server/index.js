const server = require('./server');

const port = process.env.PORT || 8000;
require('./ngrok')(port);

server.listen(port);
console.log(`server running on port ${port}`);
