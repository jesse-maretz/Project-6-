const Player = require("../models/Player")

Player.deleteMany({})
    .then(()=>{
        Player.create(playerData)
            .then((res)=>{
                console.log(res);
                process.exit()
            })
    })