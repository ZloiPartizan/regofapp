// import mongoose from 'mongoose'
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    name: {type: String, required:true, minlength: 3, maxlength: 200},
    author: {type: String, minlength: 3, maxlength: 30},
    uid: String,
    isComplete: Boolean,
    date: { type: Date, default: new Date()}
})

const Todo = mongoose.model('TODO', todoSchema)

exports.Todo = Todo
// module.exports.Todo = Todo
// module.exports = Todo
// export default Todo