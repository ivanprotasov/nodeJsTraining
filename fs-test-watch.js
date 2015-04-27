"use strict"
const fs = require("fs"),
    filename = process.argv[2],
    method = process.argv[3];

fs.watch(filename, function(){
    console.log("File " + filename +" has been changed!" )
});

console.log("Start watching " + filename +"!")
