//basic express boiler plate code,
// with express.json() middleware
const express = require('express')
const app = express()
const types = ('/')

app.use(express.json())
app.post('/todo',function(req,res,next) {

})

app.get('/todos',function(req,res,next){

})

app.put('/completed',function(req,res,next){

})