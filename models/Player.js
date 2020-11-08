const mongoose = require('../db/connection')

const Schema = mongoose.Schema;

const Player = new Schema({
    name_display_first_last: String,
    college: String,
    position_txt: String,
    jersey_number: Number,
    bats: String,
    throws: String
})

module.exports = mongoose.model("Player", Player)