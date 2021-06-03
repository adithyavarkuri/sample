const fs = require("fs");

if(fs.existsSync("storagefiles")){
    console.log("Directory already exists");
}else{
    fs.mkdir("storagefiles" , err =>{
        if(err){
            throw err;
        }
        console.log("Directory created");
    })
}

