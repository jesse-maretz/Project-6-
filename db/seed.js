//const Player = require("../models/Player")
const fetch = require('node-fetch')


let playerData = fetch("http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&all_star_sw='N'&sort_order=name_asc&season='2017'")
    .then(res => res.json())
    .then(data=>console.log(data.team_all_season.queryResults.row))
/*
Player.deleteMany({})
    .then(()=>{
        Player.create(playerData)
            .then((res)=>{
                console.log(res);
                process.exit()
            })
    })
*/
