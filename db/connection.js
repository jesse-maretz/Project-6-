const mongoose = require('mongoose')
let mongoURI = ""
mongoose.connect("mongodb+srv://sheckjess:Yanksroster1001@cluster0.ifofk.mongodb.net/yanksroster?retryWrites=true&w=majority", {useNewUrlParser: true})
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/yanksroster";
  }
module.exports = mongoose