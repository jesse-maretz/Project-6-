const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/yanksroster', {useNewUrlParser: true})
module.exports = mongoose