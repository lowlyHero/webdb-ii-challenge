const knex = require('knex');

const config = require('../knexfile');

const db = knex(config.development);

module.exports = {
    find,
    findById,
    add,
    update,
    remove
  };
  
  function find() {
    return db('zoos');
  }
  
  function findById(id) {
    return db('zoos')
      .where({ id })
      .first();
  }
  
  function add(zoos) {
    return db('zoos')
      .insert(zoos, 'id')
      .then(ids => {
        const [id] = ids;
  
        return findById(id);
      });
  }
  
  function update(id, changes) {
    return db('zoos')
      .where({ id })
      .update(changes)
      .then(count => {
        if (count > 0) {
          return findById(id);
        } else {
          return null;
        }
      });
  }
  
  function remove(id) {
    return findById(id).then(zoo => {
      if (zoo) {
        return db('zoos')
          .where({ id })
          .del()
          .then(() => {
            return zoo;
          });
      } else {
        return null;
      }
    });
  }