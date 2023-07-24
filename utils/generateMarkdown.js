// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge ='';
  if(license != 'Unlicensed'){
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
    case 'Unlicensed': licenseLink = '';
    break;
    default: licenseLink = '';
    break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let LicenseSection ='';

  if(license != 'Unlicensed'){
    LicenseSection += `See ${renderLicenseLink(license)} to learn more`;
  }
  return LicenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n${renderLicenseBadge(data.license)}\n## Description\n${data.description}\n## Table of Contents\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [License](#license)\n- [Questions](#questions)\n## Installation\n${data.installation}\n## Usage\n${data.usage}\n## Contributing\n${data.contributing}\n## Tests\n${data.tests}\n## License\n${renderLicenseSection(data.license)}\n## Questions\nFor any questions about the project, please feel free to reach out to [${data.github}](https://github.com/${data.github}) or contact via email at ${data.email}.
`;
}

module.exports = generateMarkdown;