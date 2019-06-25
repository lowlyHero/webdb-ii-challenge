const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());

// ============ GET ================

server.get('/zoos', (req, res) => {

});

server.get('/zoos/:id', (req, res) => {

});

// ============ POST ===============

server.post('/zoos', (req, res) => {

});

// ============ PUT ===============

server.put('/zoos/:id', (req, res) => {

});

// ============ DELETE ===============

server.delete('/zoos/:id', (req, res) => {

});

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
