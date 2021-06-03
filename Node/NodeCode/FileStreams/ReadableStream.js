const fs =  require("fs");

const readStream = fs.createReadStream("../www/File/uploads/samples.js" , "UTF-8");

readStream.on("data" , data =>{
    console.log(data);
})

readStream.once("data" , data=>{
    console.log(data);
})

readStream.on("end" , ()=>{
    console.log("Finished");
})