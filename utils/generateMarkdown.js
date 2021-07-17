// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license == 'GNU License v3.0 or Later'){
    return `[![License](https://img.shields.io/badge/license-GPL-blue)](https://www.gnu.org/licenses/gpl-3.0-standalone.html)`
  } 
  else if (license == 'MIT License'){
    return `[!License[(https://img.shields.io/badge/license-MIT-green.svg)](https://spdx.org/licenses/MIT.html)`
  }
  else if (license == 'Apache 2.0'){
    return `[!License[(https://img.shields.io/badge/license-Apache-blue)](http://www.apache.org/licenses/LICENSE-2.0)`
  }
  else if (license == 'None'){
    return `[!License[(img link)](license link)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.desciption}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Tests](#tests)
  

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Tests
  ${data.tests}

  ## Questions
  Find the link to my Github here: [https:.//github.com/${data.username}]
  Contact me via email ${data.email}






`;
}

module.exports = generateMarkdown;
