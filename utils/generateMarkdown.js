// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (`${license}` == "MIT License") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (`${license}` == " Apache 2.0 License") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (`${license}` == "Boost 1.0 License") {
        return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return "unlock"
function renderLicenseSection(license) {
    if (`${license}` == "unlock") {
        return `it is not covered by a license`;
    } else {
        return `it is covered with ${license}license`;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
    return `
# ${responses.title}
        
#Description
${responses.description}

# Table of Contents
[Installation](#Installation)<br>
[Usage](#Usage)<br>
[Contributors](#Contributing)<br>
[Test](#Test)<br>
[Questions](#Questions)<br>

# Installation
${responses.installation}

# Usage
${responses.usage}

# Code
    npm start

# License
${renderLicenseBadge(responses.license)}
<br>
${renderLicenseSection(responses.license)}

# Contributing
${responses.contribution}

# Tests
${responses.test}

# Questions
Created by ${responses.username}
<br>
Email me:${responses.email}
    `;
}

module.exports = generateMarkdown;