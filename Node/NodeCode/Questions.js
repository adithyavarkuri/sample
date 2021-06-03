const readline = require("readline");
const  rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


const questions = [
    "what is your name",
    "What would you do",
    "What is your favourite language"
];

const collecAnswers =(questions ,done) => {
    const answers = [];
    const [first ,second ,third] = questions;

    const questionAnswered = answer =>{
        answers.push(answer);
        if(answers.length< questions.length){
            rl.question(questions[answers.length] , questionAnswered);
        }else{
            done(answers);
        }
    }
    rl.question(first , questionAnswered);
}

collecAnswers(questions , answers => {
    console.log("Thankyou");
    console.log(answers);
    process.exit();
})