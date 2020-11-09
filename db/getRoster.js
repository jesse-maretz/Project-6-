const fetch = require("node-fetch")
const fs = require("fs")
const rosterURL = "http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id='147'"

fetch(rosterURL)
    .then(res=>res.json())
    .then(roster=>{
        console.log(roster.roster_40.queryResults.row)
        let jsonRoster = JSON.stringify(roster.roster_40.queryResults.row)
        fs.writeFile("./db/data.json", jsonRoster,(err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("file created")
            }
        })
    })