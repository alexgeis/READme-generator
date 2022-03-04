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
  {
    type: "list",
    message: "License type:",
    name: "license",
    choices: ["MIT", "GNU GPLv3", "GNU AGPLv3", "The Unlicense", "none"],
  },
  {
    type: "input",
    message: "Developer Github username:",
    name: "gitName",
  },
  {
    type: "input",
    message: "Developer email:",
    name: "email",
  },
];

//BADGE - shields.io - make badge via URL
//https://img.shields.io/badge/license-LICENSETYPE-blue

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    // TODO: Create a function to write README file
    function createReadme(response) {
      return `# ${response.title}
![License Badge](https://img.shields.io/badge/license-${response.license}-blue)

## Description
      
${response.description}

## Table of Contents
      
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#example)
- [Tests](#example)
- [Questions](#example)
- [License](#license)
      
## Installation
      
${response.installInstructions}

## Usage

${response.usageInfo}
      
## Contributing

${response.contribGuides}
      
## Tests

${response.testInstructions}
      
## Questions

${response.gitName}
${response.email}
      
---
      
## License

${response.license} license
      
`;
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
