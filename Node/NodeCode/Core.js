const path = require("path");
//below two ways we can import modules
const utils = require("util");
const {log} = require("util");
const v8 = require("v8");

const dirUploads =  path.join(__dirname,"www" , "File" , "uploads" );
console.log(dirUploads);

utils.log(path.basename(__filename));
utils.log("file name is")

utils.log(v8.getHeapStatistics());

log(path.basename(__filename))