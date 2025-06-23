const db = require('../../data/dbConfig')


const getAll = () =>{
    return db('resources')
}
const getById = id =>{
    return db('resources').where('resource_id',id).first()
}
const create = resource => {
    return db('resources')
      .insert(resource)
      .then(([resource_id]) => {
        return db('resources')
          .where('resource_id', resource_id)
          .first();
      });
  };

module.exports = {
    getAll,
    getById,
    create
    
}