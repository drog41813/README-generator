// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge ='';
  if(license != none){
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch(license){
    case 'MIT': licenseLink = 'https://mit-license.org/';
    break;
    case 'BSD': licenseLink = 'https://opensource.org/licenses/BSD-3Clause';
    break;
    case 'GPL': licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    break;
    case 'Apache': licenseLink ='https://www.apache.org/licenses/LICENSE-2.0.html';
    break;
    case 'Unlicensed': licenseLInk = '';
    break;
    default: licenseLink = 'https';
    break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license){
  let LicenseSection = '';

  if(license != 'none') {
    LicenseSection += "##License\n";
    LicenseSection += "See the" + renderLicenseLink(license) + "in order to get more information for the license\n";
   }
   return LicenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## License
  This project is licensed under the ${data.licenses} license.
  ## Questions
  For any questions about the project, please feel free to reach out to [${data.github}](https://github.com/${data.github}) or contact via email at ${data.email}.
  `;
}

module.exports = generateMarkdown;
