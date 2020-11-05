const mongoose = require('../db/connection')

let Player = new mongoose.Schema({
    name = String,
    hometown = String,
    position = String,
    age = Number,
    careerAvg = Number,
    careerOps = Number,
})

module.exports = mongoose.model("Player", Player)