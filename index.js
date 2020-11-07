const express = require('express')
const app = express()
const Player = require("./models/Player")


app.get('/',(req,res)=>{
    Player.find({}).then(data=>{
        console.log(data)
        res.json(data)
    })
    console.log('Root route')
    res.send("You're on the route!")
})
app.get('/players',(req,res)=>{
    Player.find({}).then(players=>{
        res.json(players)
    })
})




app.listen(9002,()=>{
    console.log('the port i am listening to is over 9000')
})