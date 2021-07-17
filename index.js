// TODO: Include packages needed for this application
const fs = require("fs");
const { truncate } = require("fs/promises");
const inquirer = require("inquirer");
const { generate } = require("rxjs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project? (Required)',
    validate: titleInput => {
      if(titleInput){
        return true;
      } else {
        console.log('You need to enter a project name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description of your project (Required)'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide step-by-step instructions of how to get the environment running (Required)'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. Include screenshots as necessary (Required)'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List any collaborators and their GitHub profiles'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license did you choose for your project?',
    choices: ['License 1', 'License 2', 'License 3', 'None']
  },
  {
    type: 'checkbox',
    name: 'contributing',
    message: 'What technology contributed to your project?',
    choices: ['HTML', 'CSS', 'JavaScript', 'Node', 'jQuery', 'Other']
  },
  {
    type: 'checkbox',
    name: 'tests',
    message: 'Please run these tests to validate your application',
    choices: ['Choice 1', 'Choice 2', 'Choice 3']
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username (Required)',
      validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log("Your GitHub username is a required field");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
      validate: (emailInput) => {
        if (emailInput){
        return true;
      } else {
        console.log("Please enter your email address");
        return false;
      }
    }
  }

]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if(err){
      console.log(err);
    } else {
      console.log('File generated successfully!');
    };
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(data => {
    writeToFile("./README.md", generateMarkdown(data))
  })
};

// Function call to initialize app
init();

