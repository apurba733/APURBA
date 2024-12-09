const TaskService = require('../services/taskServices');

exports.createTask = async (req, res) => {
    try{
     const task = await TaskService.createTask(); //req.body
     res.status(201).send(task);

     
    }catch(error){
        res.status(400).send(error);

    }
    
}
exports.getTasks = async (req, res) => {
    try{
        const tasks = await TaskService.getTasks()
        res.status(200).send(tasks);

    }catch(error){
        res.status(500).send(error);

    }

}
// get task by id
exports.getTaskID = async (req, res) => {
    try{
        const tasks = await TaskService.getTaskID()
        res.status(200).send(tasks);

    }catch(error){
        res.status(500).send(error);

    }
}

// update task
exports.updateTaskID = async (req, res) => {
    try{
        const tasks = await TaskService.updateTaskID()
        res.status(200).send(tasks);

    }catch(error){
        res.status(500).send(error);

    }
}

//delete task
exports.deleteTask =async (req,res) => {
    try{
        consttasks =awaitTaskService.updateTaskID()
        res.status(200).send(tasks);

    }catch(error){
        res.status(500).send(error);
    }

}



