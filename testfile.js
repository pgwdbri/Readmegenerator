const inquirer = require("inquirer");

const fs = require("fs");

function runPrompt () {
    inquirer.prompt([
        {
            type:"input",
            name: "namedeveloper",
            message: "enter projectname",
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
        }
        
    ])
    .then(function (response){
        console.log(response);
    })
}

runPrompt()