const { required } = require('joi')
const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({ 
    title: {type : String, required : true}, // Required,maximum 100 characters
description: {type : String,reqired : true}, // Optional
status: {type : String, default: pending},// Enum:['TODO','IN_PROGRESS,'COMPLETED']
priority: String, // Enum: ['LOW','MEDIUM','HIGH']
dueDate: Date, // Optional
createdAt: {type: Date, default: Date.now}, // Optional
updatedAt: Date 
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;