const http = require('http');

const app = require('./app')


const port = process.env.PORT || 3000;

const server = htttp.createServer();

server.listen(port)