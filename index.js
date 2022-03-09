// Modules
const {prompt} = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");

const managerPrompt = [
    {
        type: "input",
        name: "managerName",
        message: "What is the Manager's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the Manager's id number?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the Manager's email?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?",
    },
];

const employeePrompt = [
    {
        type: "list",
        name: "role",
        message: "What is the role of the employee you want to add?",
        choices: ["Engineer", "Intern"]
    },
    {
        message: (answers)=> `What is the name of the ${answers.role}?`,
        name: "name",
    },
    {
        message: (answers)=> `What is the id of the ${answers.role}?`,
        name: "id",
    },
    {
        message: (answers)=> `What is the email of the ${answers.role}?`,
        name: "email",
    },
    {
        message: (answers)=> {
            if(answers.role === 'Engineer') return "What is the GitHub username of the engineer?"
            return "What school does this intern attend?"
        },
        name: "extra",
    },
];





