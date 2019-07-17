const express = require('express');
const helmet = require('helmet');

const server = express();
const db = require('./data/dbConfig');

server.use(express.json());
server.use(helmet());

server.get('/', async (req, res) => {
  try {
    const zoos = await db.find(req.query);
    res.status(200).json(zoos)
  } catch(error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Error. Cannot retrieve Zoos.' });
  }
});

server.get('/:id', async (req, res) => {
  try {
    const zoosId = await db.findById(req.params.id); 
    res.status(200).json(zoosId)
  } catch(error) {
    console.log(error);
  }
});

server.post('/', async (req, res) => {
  try {
    if(req.body.name) {
      let newZoo = {
        name: req.body.name
      };
      let createdZooId = await db.add(newZoo);
      let createdZoo = await db.findById(createdZooId.id);
      res.status(201).json(createdZoo);
    } else {
      res.status(404).json({ message: 'Error: Please enter a Zoo name.' });
    }
  } catch(error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Error. Unable to add Zoo information' });
  }
});

server.put('/:id', async (req, res) => {
  try {
    const zoos = await db.update(req.params.id, req.params.body);
    res.status(200).json(zoos);
  } catch(error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Error. Unable to update Zoo' });
  }
});

server.delete('/:id', async (req, res) => {
  try {
    const zoos = await db.remove(req.params.id);
    if(zoos) {
      res.status(200).json({ message: 'The zoo has been successfully removed.' });
    } else {
      res.status(404).json({ message: 'That zoo doesn\'t exist, silly goose.' });
    }
  } catch(error) {
    console.log(error);
  }
});

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Listening on http://localhost:${port} ===\n`);
});
