const mongoose = require('../db/connection')

const Schema = mongoose.Schema;

const Player = new Schema({
    name: String,
    college: String,
    position: String,
    number: Number,
    bats: String,
    throws: String,
    height: String,
    weight: String
})

module.exports = mongoose.model("Player", Player)