// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return  "unlock"
function renderLicenseBadge(license) {
    if (`${license}` == "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (`${license}` == " Apache 2.0 License") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (`${license}` == "Boost 1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return "unlock"
function renderLicenseSection(license) {
    if (`${license}` == "unlock") {
        return `it is not covered by a license`
    } else {
        return `it is covered with ${license}license`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
    return `# ${responses.title}
    #License
    ${renderLicenseBadge(responses.license)}
    ${renderLicenseSection(responses.license)}
     
    #Description
    ${responses.description}


    # Table of Contents
    *[Installation](#installation)
    *[Usage](#usage)
    *[Contributors](#contributors)
    *[Test](#test)
    *[Questions](#questions)

    #Installation
    ${responses.installation}

    #Usage
    ${responses.usage}

    #Contributing
    ${responses.contribution}

    #Test
    ${responses.test}

    #Questions
    Created by ${responses.username}
    <br>
    Email:${responses.email}
    `;
}

module.exports = generateMarkdown;