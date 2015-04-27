"use strict"
const fs = require("fs"),
    spawn = require("child_process").spawn,
    filename = process.argv[2],
    onlyFileName=filename.slice(0,-4),
    method = process.argv[3];

    function getDate(date){
        var dd = date.getDate();
        var mm = date.getMonth()+1; //January is 0!
        var yyyy = date.getFullYear();

        if(dd<10) {
            dd='0'+dd
        }

        if(mm<10) {
            mm='0'+mm
        }

        date = mm+'-'+dd+'-'+yyyy;
        return date;
    }

    if (method=="copy"){
        var actionFunc = function(){
            fs.stat(filename, function(err, stats){
                var date = getDate(stats.mtime);
                spawn('cmd',[
                    '/C',
                    'copy',
                    filename,
                    onlyFileName+"-"+date+".txt"
                ])
            })

        }
    }else if (method=="del"){
        actionFunc = function(){
            spawn('cmd',[
                '/C',
                'del',
                filename
            ])
        }
    }else{
        var message = "Please set parameter to 'copy' or 'del'"
        console.log(message)
        actionFunc = function(){
            console.log(message)
        }
    }

fs.watch(filename, function(){
    actionFunc();
});

