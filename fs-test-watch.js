"use strict"

const fs = require("fs");

fs.watch("HelloWorld.txt", function(){
    console.log("!")
});

console.log("Start!")

function foo(){

}