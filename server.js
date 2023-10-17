const express = require('express')
const app = express()
const arr = require('./data')

app.use(express.json())


app.get('/', (req,res)=>{
    res.json(arr)
})

app.post('/', (req,res)=>{
    arr.push({...req.body})

    res.json('salvo')
})



app.listen(3000, ()=> console.log('conectado'))