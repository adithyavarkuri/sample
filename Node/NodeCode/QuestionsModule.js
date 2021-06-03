const collecAnswers = require("./CollectAnswers");
const questions = [
    "what is your name",
    "What would you do",
    "What is your favourite language"
];

collecAnswers(questions , answers => {
    console.log("Thankyou");
    console.log(answers);
    process.exit();
})