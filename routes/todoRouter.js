// imported express
const { json } = require('body-parser')
const express = require('express')

// imported my model
const Todo = require('../model/TodoList')

// creating an express router
const router = express.Router()

// creating all my routes

router.get('/', async(req, res)=>{
  try {
    const titles = await Todo.find()
    res.json(titles)
  } catch (error) {
    res.status(404).json('oh! you have encounted error' + error)
  }
})

router.get('/:id', async(req, res)=>{
  try {
    const single_title = await Todo.findById(req.params.id)
    res.json(single_title)
  } catch (error) {
    res.status(404).json('oh! you have encounted error' + error)
  }
})

router.post('/add', async(req, res)=>{
  const new_title = await new Todo({
    title:req.body.title
  })
  try {
    const saved = await new_title.save()
    res.json('new title added')
  } catch (error) {
    res.status(404).json('oh! you have encounted error' + error)
  }
})

router.post('/:id', async(req, res)=>{
  try {
    const fetch_id = await Todo.findById(req.params.id)
    fetch_id.title = req.body.title

    const edited_title = await fetch_id.save()
    res.json(edited_title)
  } catch (error) {
    res.status(404).json('oh! you have encounted error' + error)
  }
})

router.delete('/:id', async (req, res)=>{
  try {
    const fetch_id = await Todo.findByIdAndDelete(req.params.id)
    res.json('item deleted')
  } catch (error) {
    res.status(404).json('oh! you have encounted error' + error)
  }
})



// exporting my router to use it inside the server.js
module.exports = router