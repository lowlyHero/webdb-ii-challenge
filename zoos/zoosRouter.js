const router = require('express').Router();
const Zoos = require('./zoosModel');
// ============ GET ================

router.get('/', (req, res) => {
    Zoos.find()
    .then(zoos => {
        res.status(200).json(zoos);
    })
    .catch(error => {
        res.status(500).json(error);
    })
});
  
  router.get('/:id', (req, res) => {
    Zoos.findById(req.params.id)
    .then(zoos => {
        res.status(200).json(zoos);
    })
    .catch(error => {
        res.status(500).json(error);
    })
});
  
  // ============ POST ===============
  
//   router.post('/', (req, res) => {
//     if(!req.body.name) {
//         res.status(400).json({
//             message: 'Please enter the name of a zoo.'
//         })
//     } else {
//         let newZoo = {
//             name: req.body.name
//         };
//         let createdZooId = Zoos.add(newZoo);
//         let createdZoo = Zoos.findById(createdZooId.id);
//         res.status(201).json(createdZoo);
//     }
//   });

router.post('/', (req, res) => {
    // add a role to the database
    // db('roles').insert(req.body).then([id] => {
    Zoos.add(req.body)
      .then(role => {
        res.status(200).json(zoos);
      })
      .catch(error => {
        res.status(500).json(error)
      })
  });
  
  // ============ PUT ===============
  
  router.put('/:id', (req, res) => {

  });
  
  // ============ DELETE ===============
  
  router.delete('/:id', (req, res) => {

  });

  module.exports = router;