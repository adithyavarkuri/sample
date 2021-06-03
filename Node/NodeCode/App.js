const counter = require("./MyModule");
//or
const {inc ,dec ,getCount} = require("./MyModule");

console.log(counter);

counter.inc()
counter.inc()
console.log(counter.getCount());

inc()
inc()
console.log(getCount());