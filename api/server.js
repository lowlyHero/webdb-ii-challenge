const express = require('express');
const helmet = require('helmet');

const zoosRouter = require('../zoos/zoos-router');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/zoos', zoosRouter);

module.exports = server;