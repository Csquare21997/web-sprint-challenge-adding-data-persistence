// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = () =>{
    return db('projects')
}
const getById = id =>{
    return db('projects').where('project_id',id).first()
}
const create = project =>{
    return db('projects').insert(project)
 .then(([project_id])=>  {
  return db('projects').where('project_id',project_id).first()
 })
}


module.exports = {
    getAll,
    getById,
    create
}