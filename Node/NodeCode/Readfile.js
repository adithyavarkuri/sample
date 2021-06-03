const fs = require("fs");

const text = fs.readFileSync("./www/File/uploads/sample.js" ,"UTF-8");

 fs.readFile("./www/File/uploads/sampled.js" ,"UTF-8" , (err, text)=>{
     if(err){
         console.log(`Error has occured ${err.message}`);
         process.exit();
     }
     console.log(text);
 })

console.log(text);