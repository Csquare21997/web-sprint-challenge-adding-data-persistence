const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', async (req, res, next)=>{
    try{
        const tasks = await Task.getAll()
        const taskloop = tasks.map(task =>({
            ...task,
            task_completed: !!task.task_completed
        }))
        console.log('hey taskloop',taskloop)
        
        res.json(taskloop )
    } catch(err){
        next(err)
    }
    
})
router.get('/:task_id', async (req, res, next)=>{
    try{
        const task = await Task.getById(req.params.task_id)
        res.json(task)
    } catch(err){
        next(err)
    }
})
router.post('/', async (req, res)=>{
    try{
        const newTask = await Task.create(req.body);
        res.status(201).json({
            ...newTask,
            task_completed: !!newTask.task_completed
    })
    }catch(err){
        res.status(400).json({message: 'Error creating project'})
    }
   
})

module.exports = router