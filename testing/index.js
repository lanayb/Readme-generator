// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');


// TODO: Create an array of questions for user input
 const questions =[
     {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your readme?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is the description of your readme?',
    },
    {
        type: 'input',
        name: 'Installation Instructions',
        message: 'What are the installation instrutions?',
    },
    {
        type: 'input',
        name: 'Usage Information',
        message: 'What is the usage information?'
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
    }
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if(err) {
            console.log(error);
        } else {
            console.log('success!!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => writeToFile(answers));
}

// Function call to initialize app
init();
