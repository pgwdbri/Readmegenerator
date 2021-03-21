const inquirer = require("inquirer");

const fs = require("fs");

function runPrompt () {
    inquirer.prompt([
        {
            type:"input",
            name: "namedeveloper",
            message: "enter authorname",
        },
        {
            type:"input",
            name: "title",
            message: "enter title",
        },
        {
            type:"input",
            name: "description",
            message: "enter description",
        },
        {
            type: "list",
            name: "forlicense",
            message: "enter license",
            choices: ["MIT","ISC","APACHE 2.0","NONE"]
        },
        {
            type:"input",
            name: "installation",
            message: "installation instructions",
        },
        {
            type:"input",
            name: "testing",
            message: "enter testing requirements for this project",
        },
        {
            type:"input",
            name: "usage",
            message: "enter usage instructions",
        },
        {
            type:"input",
            name: "email",
            message: "enter email",
        },
        {
            type:"input",
            name: "githubusername",
            message: "enter github username",
        }
        
    ])
    .then(function (response){
        console.log(response);
        let fileData = `
# Project: ${response.title}
### Author name: ${response.namedeveloper}

## Table of Contents: 
* [Description](#Description)
* [Github Profile](#Github)
* [Installation](#Installation)
* [Usage](#usage)
* [License](#license)
* [Testing](#testing)
* [Questions](#questions)

# Description
${response.description}

#GitHub
[Github Profile](https://github.com/${response.githubusername})

# Installation
${response.installation}

# Usage
${response.usage}

# License
![GitHub license](https://img.shields.io/badge/license-${response.forlicense}-blue.svg)

# Testing
${response.testing}

# Email
Feel free to reach me at ${response.email}

   `

   console.log(fileData)
   fs.writeFileSync("README.MD",fileData,function(error,data){
       if (error)throw error
       console.log(data)
   })
    })
}


runPrompt()