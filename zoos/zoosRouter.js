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

router.post('/', (req, res) => {
    Zoos.add(req.body)
      .then(zoo => {
        res.status(200).json(zoo);
      })
      .catch(error => {
        res.status(500).json(error)
      })
  });
  
  // ============ PUT ===============
  
  router.put('/:id', (req, res) => {
    Zoos.update(req.params.id, req.body)
    .then(zoo => {
        if(zoo) {
            res.status(200).json(zoo)
        } else {
            res.status(404).json({
                message: 'Zoo not found.'
            })
        }
    })
    .catch(error => {
        res.status(500).json({
            message: 'The Zoo could not be updated. Please try again.', error
        })
    })
  });
  
  // ============ DELETE ===============
  
  router.delete('/:id', (req, res) => {
    Zoos.remove(req.params.id)
    .then(zoo => {
      res.status(200).json({
          message: 'The Zoo has been successfully removed.', zoo
      });
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

  module.exports = router;