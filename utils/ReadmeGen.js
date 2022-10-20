class MarkDown {

    static renderLicenseBadge(license) {
        const badge = {
            None: "",
            Apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
            Boost: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
            BSD2: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
            BSD3: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
            Eclipse: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
            GNUAffero: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
            GNUV2: "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
            GNUV3: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
            MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
            MozillaPublicLicense: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
            TheUnlicense: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
        }
        return badge[license]
    }

    static renderLicenseLink(license) {
        const licenseLinks = {
            None: "",
            Apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
            Boost: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
            BSD2: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
            BSD3: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
            Eclipse: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
            GNUAffero: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
            GNUV2: "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
            GNUV3: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
            MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
            MozillaPublicLicense: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
            TheUnlicense: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
        }
        return licenseLinks[license]
    }

    static renderLicenseSection(license) {
        if(license){
            return `Licensed under the ${this.renderLicenseLink(license)} license`
        } else {
            return ""
        }
    }

    static generateReadme(answers) {
        return `
# ${answers.title}

${this.renderLicenseBadge(answers.license)}

## Table of Contents
- [Deployed Link](#deployed-link)
- [Screenshot](#screenshot)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [To Contribute](#to-contribute)
- [Tests](#tests)
- [GitHub](#github)
- [Email](#email)
- [License](#license)

## Deployed Link
${answers.deployedLink}

## Screenshot
${answers.screenshot}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributors
${answers.contributors}

## To Contribute
${answers.toContribute}

## Tests
${answers.tests}

## GitHub
${answers.GitHub}

## Email
${answers.email}

## License
${this.renderLicenseSection(answers.license)}
    
    `
    }
}

module.exports = MarkDown