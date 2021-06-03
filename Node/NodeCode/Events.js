const events = require("events");
const emmiter = new events.EventEmitter();

emmiter.on("customEvent" ,(message ,user) =>{
    console.log(`${user} : ${message}`);
})

emmiter.emit("customEvent","hello world","Computer");
emmiter.emit("customEvent","Hellow welcome","user");

process.stdin.on("data" , data=>{
    const input =data.toString().trim();
    if(input === "exit"){
        emmiter.emit("customEvent","goodbye","process");
        process.exit();
    }
    emmiter.emit("customEvent",input,"process");
})

