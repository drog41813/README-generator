// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What's the title of your project?"
  }, 
  {
    type: 'input',
    name: 'description',
    message: "Enter the description of your project."
  },
  {
    type: 'input',
    name: 'installation',
    message: "Enter intallation details."
  },
  {
    type: 'input',
    name: 'usage',
    message: "Enter usage information."
  },
  {
    type: 'list',
    name: 'license',
    message: "Which license would you like for your project?",
    choices: ['MIT', 'GPLv3', 'Apache', 'BSD', 'Unlicensed']
  },
  {
    type: 'input',
    name: 'contributing',
    message: "Enter any contributions."
  },
  {
    type: 'input',
    name: 'tests',
    message: "Enter any tests required for your project."
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username.',
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address.',
}]

// TODO: Create a function to write README file
function writeToFileSync(fileName, data) {
  const content = typeof data ==='string' ? data : JSON.stringify(data, null);

  fs.writeFile(fileName, content, (err) => {
    if(err) {
      console.error('error making file: ', err);
    } else {
      console.log('File successfully created: ', fileName);
    }
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((data)=> {
    writeToFileSync('README-output.md', generateMarkdown(data));
  })
  .catch((error)=> {
    console.error('error: ', error);
  })
}

init();