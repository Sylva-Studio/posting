const mongoose = require('mongoose')

const schema = mongoose.Schema

const todoSchema = new schema({
  title : String,
  date : {
    type:Date,
    default:Date.now
 }
})

const todo = mongoose.model('Todo', todoSchema)

module.exports = todo