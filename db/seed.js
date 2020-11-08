const data = require("./data.json")
const Player = require("../models/Player")

console.log(data)
const rosterData = data.map(item=>{
    let roster = {}
    roster.name = item.name_display_first_last;
    roster.college = item.college
    roster.position = item.position_txt;
    roster.number = item.jersey_number;
    roster.bats = item.bats;
    roster.throws = item.throws;
    roster.height = `${item.height_feet}'${item.height_inches}"`
    roster.weight = item.weight
    return roster;
})
console.log(rosterData)

Player.deleteMany({})
    .then(()=>{
        Player.create(rosterData)
            .then((res)=>{
                console.log(res);
                process.exit()
            })
    })
/*
fetch("http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code='mlb'&player_id='642180'")
    .then(res => res.json())
    .then(data=>console.log(data.player_info.queryResults.row))
    */