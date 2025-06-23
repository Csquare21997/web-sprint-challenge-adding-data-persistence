// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', async (req, res, next)=>{
    try{
        const projects = await Project.getAll()
        const projectLoop = projects.map(project =>({
            ...project,
            project_completed: !!project.project_completed
            
        }))
        res.json(projectLoop)
    } catch(err){
        next(err)
    }
    
})
router.get('/:project_id', async (req, res, next)=>{
    try{
        const project = await Project.getById(req.params.project_id)
        if(project){
            res.json({
                ...project,
                project_completed: !!project.project_completed
            })
        } else{
            res.status(404).json({message:'Project not found'})
        }
        res.json(project)
    } catch(err){
        next(err)
    }
})
router.post('/', async (req, res)=>{
    try{
        const newProject = await Project.create(req.body);
        res.status(201).json({
            ...newProject,
            project_completed: !!newProject.project_completed
    })
    }catch(err){
        res.status(400).json({message: 'Error creating project'})
    }
   
})

module.exports = router