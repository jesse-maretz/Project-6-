const express = require('express')
const app = express()
const Player = require("./models/Player")
const rosterData = require("./db/data.json")


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
    res.send(rosterData)
})

app.get('/players/name/:name',(req,res)=>{
    Player.find({name:req.params.name}).then(players=>{
        res.json(players)
    })
})




app.listen(9002,()=>{
    console.log('the port i am listening to is over 9000')
})