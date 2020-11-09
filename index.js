const express = require('express')
const app = express()
const Player = require("./models/Player")
const parser = require("body-parser")

app.use(parser.json())

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
app.post('/players',(req,res)=>{
    Player.create(req.body).then(players=>{
        res.json(players)
    })
})
app.put('/players/:id',(req,res)=>{
    Player.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true}
        ).then(players=>{
        res.json(players)
    })
})
app.delete('/players/:id',(req,res)=>{
    Player.findByIdAndRemove(
        {_id: req.params.id}
        ).then(players=>{
        res.json(players)
    })
})

app.get('/players/:id',(req,res)=>{
    Player.findById(req.params.id).then(player=>{
        res.json(player)
    })
})

app.get('/players/name/:name',(req,res)=>{
    Player.find({name:req.params.name}).then(player=>{
        res.json(player)
    })
})

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});