const server = require('./api/server');

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
