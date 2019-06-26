const knex = require('knex');

const knexConfig = {
  client: 'sqlite3', 
  useNullAsDefault: true, 
  connection: {
    filename: './data/lambda.db3',
  },
};

const db = knex(knexConfig);

module.exports = {
  find,
  findById
//   add,
//   update,
//   remove,
};

function find() {
  return db('name');
}

function findById(id) {
  return db('name')
    .where({ id })
    .first();
}

// function add(role) {
//   return db('roles')
//     .insert(role, 'id')
//     .then(ids => {
//       const [id] = ids;

//       return findById(id);
//     });
// }

// function update(id, changes) {
//   return db('roles')
//     .where({ id })
//     .update(changes)
//     .then(count => {
//       if (count > 0) {
//         return findById(id);
//       } else {
//         return null;
//       }
//     });
// }

// function remove(id) {
//   return findById(id).then(role => {
//     if (role) {
//       return db('roles')
//         .where({ id })
//         .del()
//         .then(() => {
//           return role;
//         });
//     } else {
//       return null;
//     }
//   });
// }