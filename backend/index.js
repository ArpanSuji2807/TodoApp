//basic express boiler plate code,
// with express.json() middleware
const express = require('express')
const { todo } = require('./db')
const { default: mongoose } = require('mongoose')
const app = express()
const {createTodo} = ("./types")   
const {updateTodo} = ("./types") 

app.use(express.json())
app.post('/todo', async function(req,res,next) {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.send(400).json({
            msg:"You sent the wrong inputs"
        })
        return
    }

    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })

    res.json({
        msg:"Todo created successfully"
    })
})

app.get('/todos',async function(req,res,next){
    let fetchedData = await todo.find({})
    if(fetchedData.length){
        res.send(200).json({
            msg:"List fetched Successfully"
        })
    }else{
        res.send(400).json({
            msg:"Could fetch the list"
        })
    }
})

app.put('/completed',async function(req,res,next){
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.send(411).json({
            msg:"You sent the wrong inputs"
        })
        return
    }

    let update = await todo.update({_id: mongoose.Types.ObjectId(updatePayload.id)},{completed:true})

    res.json({
        msg:"Todo marked as completed"
    })
})