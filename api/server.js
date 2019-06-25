const express = require('express');
const helmet = require('helmet');

const zoosRouter = require('../zoos/zoosRouter');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/zoos', zoosRouter);

server.get('/', (req, res) => {
    res.send('<h1>Zoos</h1>');
});

module.exports = server;