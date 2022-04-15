const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("A manager's name is required!");
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
                console.log("A team manager's employee ID is required!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email address (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("A team manager's email address is required!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'phone',
        message: "What is the team manager's office phone number (Required)",
        validate: phoneInput => {
            if (phoneInput) {
                return true;
            } else {
                console.log("A team manager's office phone number is required!");
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

const init = function () {
    inquirer
    .prompt(questions)
    .then(teamData => {
        console.log(teamData);
    })
}

init();