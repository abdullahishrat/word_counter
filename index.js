#! /usr/bin/env node
//this line is called a shebang, it tells the OS to run it with node
import inquirer from 'inquirer';
// declare a content answer and assign it to the result of inquirer.promp function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter your sentence to count the word"
    }
]);
const words = answers.sentence.trim().split(" ");
//print the array of words to console
console.log(words);
//print the word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);
