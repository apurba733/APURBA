const  express = require('express')
const Task = require('./models/taskModels');
const { preferences } = require('joi');
const router = express.Router();

// create new task
router.post('/tasks' , async (req, res)=>{
    try{
        const task = new Task(req.body);
        await task.save()
        res.status(201).send(task)


    }catch{
        res.status(400).send({message: 'Invalid request'});
    }
})
// get all tasks
router.get('/tasks' , async (req, res)=>{
    try{
        const tasks = await Task.find().lean().exec();
        res.status(200).send(tasks)
        }catch{
            res.status(500).send({message: 'Internal server error'});
            }
 })
// get task by id
 router.get('/task/ :id', async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).send({ message: 'Task not found' });
            }
            res.status(200).send(task);
            } catch {
                res.status(500).send({ message: 'Internal Server Error' });
                }
})
// update task by id
router.patch('/tasks/ :id', async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findByIdAndUpdate(id, req.body, { new: true })
        if (!task) {
            return res.status(404).send({ message: 'Task not found' });
            }
            res.status(200).send(task);
            } catch {
                res.status(500).send({ message: 'Internal server error' });
                }
})
// delete task by id
router.delete('/tasks/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findByIdAndDelete(id)
        if (!task) {
            return res.status(404).send({ message: 'Task not found' });
            }
            res.status(200).send({ message: 'Task deleted successfully' });
            } catch {
                res.status(500).send({ message: 'Internal server error' });
                }
});


            module.export = router;