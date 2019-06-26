const Zoos = require('./zoosModel');
const router = require('express').Router();

// ============ GET ================

router.get('/zoos', (req, res) => {
    Zoos.find()
    .then(zoos => {
        res.status(200).json(zoos);
    })
    .catch(error => {
        res.status(500).json(error);
    })
});
  
  router.get('/zoos/:id', (req, res) => {
    Zoos.findById(req.params.id)
    .then(zoos => {
        res.status(200).json(zoos);
    })
    .catch(error => {
        res.status(500).json(error);
    })
});
  
  // ============ POST ===============
  
  router.post('/zoos', (req, res) => {

  });
  
  // ============ PUT ===============
  
  router.put('/zoos/:id', (req, res) => {

  });
  
  // ============ DELETE ===============
  
  router.delete('/zoos/:id', (req, res) => {

  });

  module.exports = router;