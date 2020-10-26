const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

// express app creation
const app = express()

// middleware
app.use(cors())
app.use(express.json())

// use the router, ist import it
const todoRoute = require('./routes/todoRouter')

// connect the route to the express app, that's the only way the route can work.
app.use('/todo', todoRoute)

// connectioning to db
const uri = process.env.REALFULLSTACK

mongoose.connect(uri, {useCreateIndex:true, useNewUrlParser:true, useUnifiedTopology:true})

const connection = mongoose.connection

connection.on('open', ()=>{
  console.log('connected to db successfully')
})

const port = process.env.PORT || 8080

app.listen(port, ()=>{
  console.log('listening to port :' + port)
})
