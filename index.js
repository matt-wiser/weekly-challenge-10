const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generate-html');

const teamArray = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("A name is required!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's employee ID? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("An employee ID is required!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email address? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("An email address is required!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office phone number? (Required)",
        validate: phoneInput => {
            if (phoneInput) {
                return true;
            } else {
                console.log("An office phone number is required!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'proceedChoice',
        message: 'How would you like to proceed?',
        choices: ['Add an engineer', 'Add an intern', 'Finish input and generate HTML']
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("A name is required!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's employee ID? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("An employee ID is required!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("An email address is required!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What school is the intern attending? (Required)",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("A school is required!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'proceedChoice',
        message: 'How would you like to proceed?',
        choices: ['Add an engineer', 'Add an intern', 'Finish input and generate HTML']
    }
];
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("A name is required!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's employee ID? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("An employee ID is required!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address? (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("An email address is required!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username? (Required)",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("A GitHub username is required!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'proceedChoice',
        message: 'How would you like to proceed?',
        choices: ['Add an engineer', 'Add an intern', 'Finish input and generate HTML']
    }
];

const init = function () {
    inquirer
    .prompt(managerQuestions)
    .then(teamData => {
        const manager = new Manager(teamData);
        teamArray.push(manager);

        addTeamMember(teamData);
    })
}

const createEngineer = function(data) {
    inquirer
    .prompt(engineerQuestions)
    .then(engineerData => {
        const engineer = new Engineer(engineerData);
        teamArray.push(engineer);

        addTeamMember(engineerData);
    });
}

const createIntern = function(data) {
    inquirer
    .prompt(internQuestions)
    .then(internData => {
        const intern = new Intern(internData);
        teamArray.push(intern);

        addTeamMember(internData);
    });
}

const addTeamMember = function (data) {

    if (data.proceedChoice === 'Add an engineer') {
        createEngineer(data);
    } else if (data.proceedChoice === 'Add an intern'){
        createIntern(data)
    } else {
        generateHTML(teamArray);
    }
}

init();