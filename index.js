// TODO: Include packages needed for this application
// require generateMardown
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown");
// require inquirer
const inquirer = require("inquirer");
//inqurere.prompt(questions).then
// TODO: Create an array of questions for user input
const questions = [{
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the title of this project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please enter a project description:",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "Please provide usage information:",
        name: "usage",
    },
    {
        type: "input",
        message: "Please enter any contribution guidelines:",
        name: "contribution",
    },
    {
        type: "input",
        message: "Please provide test instructions:",
        name: "test",
    },
    {
        type: "list",
        message: "What type of license does this project use?",
        name: "license",
        choices: ["MIT License", "Apache 2.0 License", "Boost 1.0 License"],
    },
];

// TODO: Create a function to write README file
inquirer.prompt(questions).then((responses) => {
    fs.writeFile("README_GENERATED.md", generateMarkdown({...responses }), (err) =>
        err ? console.log(err) : console.log("Success!")
    );

});

function init() {

}

// Function call to initialize app
init();