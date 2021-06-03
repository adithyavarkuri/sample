const path = require("path");

console.log(`the file name is ${path.basename(__filename)}`);
console.log(__dirname);
console.log(__filename);

console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv); // execute with node Global alex