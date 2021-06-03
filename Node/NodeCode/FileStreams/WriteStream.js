const fs = require("fs");

const writeStream = fs.createWriteStream("../www/File/uploads/samples.js" , "UTF-8");

writeStream.write("hellowsdcscs");

process.stdin.on("data" , data=>{
    writeStream.write(data);

})

//Pipe