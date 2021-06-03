const fs = require("fs");

const md = `
# This is sample file
we can write to  file using fs.writeFile

`;

fs.writeFile("./www/File/uploads/sample.js", md.trim() , err=>{
    if(err){
        throw err;
    }
    console.log("file saved");
});
