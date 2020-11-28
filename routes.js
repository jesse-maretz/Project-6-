const express = require('express')
const cors = require('cors')

const Player = require('./models/Player')
const { Router } = require('express')

//GETS----------------------------
router.get('/', (req,res) => {
    Player.find({})
        .then((data)=> {
            res.json(data)
        })
})

//POSTS---------------------------
router.post('', (req,res) => {
    
})