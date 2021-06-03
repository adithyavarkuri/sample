const fs = require("fs");

fs.renameSync("./www/File/uploads/sample.js" , "./www/File/uploads/samples.js")

//by changing the path of second argument you can move the file to different path
// fs.rename("./www/File/uploads/sample.js" , "./www/File/uploads/samples.js" , err =>{
//     if(err){
//         throw err;

//     }
// });

//remove dir

fs.readdirSync("path").forEach(filename =>{
    fs.unlinkSync(`path/{filename}`)
});

fs.rmdir("path" , err=>{

});