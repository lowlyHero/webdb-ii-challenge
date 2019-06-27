const express = require('express');
const helmet = require('helmet');

const zoosRouter = require('../zoos/zoosRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/zoos', zoosRouter);

module.exports = server;