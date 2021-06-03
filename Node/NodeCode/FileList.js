const fs = require("fs");

console.log("Start reading files");
const files = fs.readdirSync("./www/File/uploads");
console.log(files);
console.log("reading completed");

console.log("Start reading files");
fs.readdir("./www/File/uploads" ,(err,files) => {
    if(err){
        throw err;
    }
    console.log(files);
    console.log("reading completed");
});

console.log("over all completed");

