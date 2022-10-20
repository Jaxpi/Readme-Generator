// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const MarkDown = require("./utils/ReadmeGen");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
        name: 'title',
        message: "What is your project title?",
    },
    {type: 'input',
        name: 'deployedLink',
        message: "What is the link to your deployed site?",
    },
    {type: 'input',
        name: 'screenshot',
        message: "What is the image src of your site screenshot?",
    },
    {type: 'input',
        name: 'description',
        message: "Provide a short description explaining what your site does and why you created it.",
    },
    {type: 'input',
        name: 'installation',
        message: "Provide instructions for how to install your app.",
    },
    {type: 'input',
        name: 'usage',
        message: "Provide instructions for a how a user would interact with your project.",
    },
    {type: 'input',
        name: 'contributors',
        message: "Who contributed to this app or who do you need to give credit to?",
    },
    {type: 'input',
        name: 'toContribute',
        message: "Provide instructions for someone who may wish to contribute to your app.",
    },

    {type: 'input',
        name: 'tests',
        message: "Provide instructions for tests.",
    },
    {type: 'input',
        name: 'GitHub',
        message: "What is your GitHub user name?",
    },
    {type: 'input',
        name: 'email',
        message: "What is your email address?",
    },
    {type: 'list',
        name: 'license',
        message: "Choose a license for your app from the following: ",
        choices: ["None", "Apache", "Boost", "BSD2", "BSD3", "Eclipse", "GNUAffero", "GNUV2", "GNUV3", "MIT", "MozillaPublicLicense", "TheUnlicense"],
    },
];

// TODO: Create a function to write README file
function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const mark = MarkDown.generateReadme(answers)
        fs.writeFile("README.md", mark, function(err) {
            if (err) {
                console.log("Error")
            } else {
                console.log("Success! New Readme File Created!")
            }
        })
        console.log(mark)
        return answers
    })
    .catch((error)=> {
        console.log(error)
    })
}

// TODO: Create a function to initialize app
// Function call to initialize app
runQuery()