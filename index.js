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
        console.log('Required: Project Name');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description of your project (Required)',
      validate: descriptionInput => {
        if(descriptionInput){
          return true;
        } else {
          console.log('Required: Description');
          return false;
        }
      }
    },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide step-by-step instructions of how to get the environment running (Required)',
    validate: installationInput =>{
      if(installationInput){
        return true;
      } else {
        console.log('Required: Installation Instructions');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. Include screenshots as necessary (Required)',
    validate: usageInput=>{
      if(usageInput){
        return true;
      } else {
        console.log('Required: Intructions on project usage');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List any collaborators and their GitHub profiles.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license did you choose for your project?',
    choices: ['GNU License v3.0 or Later', 'MIT License', 'Apache 2.0', 'None'],
    validate: licenseList => {
      if(licenseList){
        return true;
      } else {
        console.log("Required: Please select your license. If no license was used, select 'None'.")
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'contributing',
    message: 'What technology contributed to your project?',
    choices: ['HTML', 'CSS', 'JavaScript', 'Node', 'jQuery', 'Other']
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How is the project tested? (Required)',
    validate: testsInput => {
      if(testsInput){
        return true;
      } else{
        console.log('Required: Please enter project testing steps');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub username (Required)',
      validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Required: GitHub Username');
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
        console.log('Required: Email address');
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

