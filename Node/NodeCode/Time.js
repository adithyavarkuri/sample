
const wait =3000;
const waitInterval = 500;
let curretTime = 0;

const incTime= () =>{
    curretTime += waitInterval;
    const p =Math.floor((curretTime/wait) * 100)
  //  console.log(`waiting ${curretTime/1000} seconds`);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting.... ${p}%`);
}
console.log(` setting a ${wait/1000} second delay`);

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("done")
};

const  interval =setInterval(incTime , waitInterval);
setTimeout(timerFinished , wait);