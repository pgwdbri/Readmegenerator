// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const generateHTML = (answers) =>
  ```<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>ReadMe Generator</title>
</head>
<body>

  <div class="jumbotron jumbotron-fluid">

  <div class="container">
    <h1 class="display-4">Title: ${answers.title}</h1>
    <p class="lead">Description of the project: ${answers.description}.</p>
    <p class="lead">Table of contents: ${answers.toc}.</p>


    <p class="lead">Installation instructions: ${answers.install}.</p>
    <p class="lead">Usage information: ${answers.usage}.</p>

    

    <div class="dropdown">
        <button class="dropbtn">Licenses</button>
        <div class="dropdown-content">
            <a href="#">${answers.license}</a>
        </div>
    </div>


   
    <p class="lead">Contributions: ${answers.contrib}.</p>
    <p class="lead">Tests: ${answers.tests}.</p>
    

    <p class=lead> Questions? </p>
    <p class=lead> Find me on GitHub at: ${answers.github}</p>
    <p class=lead> Feel free to email questions at: ${answers.email}</p>



  </div>
</div>
</body>
</html>`;


// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a brief description of the project. Why did you build it and what problem does it solve?',
    },
    {
      type: 'input',
      name: 'toc',
      message: 'List the table of contents of the project.',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Describe the installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage information.',
    },

    {
        type: 'input',
        name: 'license',
        message: 'List licenses',
    },

    
    {
        type: 'input',
        name: 'contrib',
        message: 'List contributers to the project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What type of tests were performed?',
    },
    
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub link to your profile',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
    },
  
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    // TODO: Create a function to write README file
    function writeToFile(fileName, data) {}

    
    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();