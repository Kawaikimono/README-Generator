const inquirer = require("inquirer");
const fs = require("fs");
const { listenerCount } = require("process");
const license = {"GPL":{"name":"GNU General Public License v3.0","desc":"Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.","badge":"https://img.shields.io/badge/license-GPL-blue"},"MIT":{"name":"MIT License","desc":"A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.","badge":"https://img.shields.io/badge/license-MIT-green"},"Apache":{"name":"Apache License 2.0", "desc":"A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.","badge":"https://img.shields.io/badge/license-Apache%202-yellow"}}

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a description of your project:",
    },
    {
      type: "input",
      name: "installInst",
      message: "What are the steps required to install your project?",
    },
    {
      type: "input",
      name: "usageInfo",
      message: "Please provide instructions and examples for use:",
    },
    {
      type: "input",
      name: "contribGuide",
      message: "If you would like others to contribute, let them know how to here:",
    },
    {
      type: "input",
      name: "testInst",
      message: "If you have created any test for your project include them here:",
    },
    {
      type: "list",
      name: "license",
      message: "What license are you using for this project?",
      choices: ['GPL','MIT', 'Apache'],
    },
    {
      type: "input",
      name: "GitHub",
      message: "What is your GitHub Username for this project?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address for this project?",
    },
  ])
  .then((response) => fs.writeFile("GeneratedReadMe.MD",`# ${response.title}
  ![license](${license[response.license].badge})

  ## Description
  ${response.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${response.installInst}
  
  ## Usage
  ${response.usageInfo}
  
  ## License
  ${license[response.license].name}

  ${license[response.license].desc}

  ## How to Contribute
  ${response.contribGuide}
  
  ## Tests
  ${response.testInst}
  
  ## Questions
  [${response.GitHub} GitHub](https://github.com/${response.GitHub})
  
  Please reach me at ${response.email} for any additional questions`,err=>err?console.log(err):""));

