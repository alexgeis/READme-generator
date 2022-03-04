// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Project title:",
    name: "title",
  },
  {
    type: "input",
    message: "Project description:",
    name: "description",
  },
  {
    type: "input",
    message: "Installation instructions:",
    name: "installInstructions",
  },
  {
    type: "input",
    message: "Usage information:",
    name: "usageInfo",
  },
  {
    type: "input",
    message: "Contribution guidelines:",
    name: "contribGuides",
  },
  {
    type: "input",
    message: "Test instructions:",
    name: "testInstructions",
  },
];

//dot MD file markup - needed for table of contents

//BADGE - shields.io - make badge via URL

// TODO: Create a function to write README file
// function writeToFile(README.md, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    function createReadme(response) {
      return ``;
    }
    fs.writeFile("README.md", createReadme(response), (err) =>
      err
        ? console.error(err)
        : console.log("Project README.md file has been written!")
    );
  });
}

// Function call to initialize app
init();
