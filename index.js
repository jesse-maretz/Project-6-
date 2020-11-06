const express = require('express')
const Player = require("./models/Player")
const app = express()

app.get('/',(req,res)=>{
    Player.find({}).then(data=>{
        console.log(data)
        res.json(data)
    })
    console.log('Root route')
    res.send("You are on the root!")
})

app.listen(9002,()=>{
    console.log('the port i am listening to is over 9000')
})