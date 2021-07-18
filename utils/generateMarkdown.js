// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license == 'GNU License v3.0 or Later'){
    return `[![License](https://img.shields.io/badge/license-GPL-blue)](https://www.gnu.org/licenses/gpl-3.0-standalone.html)`
  } 
  else if (license == 'MIT License'){
    return `[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://spdx.org/licenses/MIT.html)`
  }
  else if (license == 'Apache 2.0'){
    return `[![License](https://img.shields.io/badge/license-Apache-blue)](http://www.apache.org/licenses/LICENSE-2.0)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){
    return '';
  } else if (license === 'GNU License v3.0 or Later'){
    return ` ### ${license}
    Permissions of this strong copyleft license are conditioned on making available 
    complete source code of licensed works and modifications, which include larger 
    works using a licensed work, under the same license. Copyright and license notices 
    must be preserved. Contributors provide an express grant of patent rights.`
  } else if (license === 'MIT License'){
    return `### ${license}
    A short and simple permissive license with conditions only requiring preservation
     of copyright and license notices. Licensed works, modifications, and larger works 
     may be distributed under different terms and without source code.`
  } else if (license === 'Apache 2.0'){
    return ` ### ${license}
    A permissive license whose main conditions require preservation of copyright and license 
    notices. Contributors provide an express grant of patent rights. Licensed works, 
    modifications, and larger works may be distributed under different terms and without source code.
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
 
  ## Description
  ${data.description}
  

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


  ## License
   Licensed with ${data.license}
  ${renderLicenseSection(data.license)}


  ## Questions
  Find the link to my Github here: [https:.//github.com/${data.username}](https://github.com/${data.username})
  Contact me via email ${data.email}






`;
}

module.exports = generateMarkdown;
