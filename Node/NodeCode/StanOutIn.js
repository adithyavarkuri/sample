//Input and output operations in node
process.stdout.write("Hello");
process.stdout.write("World");

const questions = [
    "what is your name",
    "What would you do",
    "What is your favourite language"
]

const ask =  (i=0) => {
    process.stdout.write(`\n\n\n\ ${questions[i]}`);
    process.stdout.write(` > `);
}

ask();
const answers =[]
process.stdin.on("data" , data => {
    answers.push(data.toString());
    console.log(` answers length` + answers.length );
    console.log(` questions length` + questions.length );
    if(answers.length < questions.length){
        ask(answers.length);
    }else{
        process.exit();
    }
})

process.on("exit", () =>{
    const [name,activity,lang] =  answers;
    console.log( `
    Thankyou for answers.
    Go ${activity} ${name} you can write ${lang} code later `);

})