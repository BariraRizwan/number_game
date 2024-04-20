#! /usr/bin/env node
import inquirer from "inquirer";
// let  numberIs = Math.random();
let numberIs = 4;
const answer = await inquirer.prompt([{
        name: "guessedNumber",
        message: "Please guess any number",
        type: "number",
    }]);
if (answer.guessedNumber === numberIs) {
    console.log("Congratulations you guessed a right number");
}
else {
    console.log("Oops your guessed number is wrong");
}
