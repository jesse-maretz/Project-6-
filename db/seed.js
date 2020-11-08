const Player = require("../models/Player")
const fetch = require('node-fetch')

Player.deleteMany({})
    .then(()=>{
        Player.create(playerData)
            .then((res)=>{
                console.log(res);
                process.exit()
            })
    })

fetch("http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&player_id='642180'")
    .then(res => res.json())
    .then(data=>console.log(data.player_info.queryResults.row))