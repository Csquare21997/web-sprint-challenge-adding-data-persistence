// build your `/api/projects` router here
const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/', async (req, res, next)=>{
    try{
        const resource = await Resource.getAll()
        res.json(resource)
    } catch(err){
        next(err)
    }
    
})
router.get('/:resource_id', async (req, res, next)=>{
    try{
        const resource = await Resource.getById(req.params.resource_id)
        res.json(resource)
    } catch(err){
        next(err)
    }
})
router.post('/', async (req, res)=>{
    try{
        const newResource = await Resource.create(req.body);
        res.status(201).json(newResource)
    }catch(err){
        res.status(400).json({message: 'Error creating project'})
    }
   
})

module.exports = router