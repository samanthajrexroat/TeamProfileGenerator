// Modules
const {prompt} = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
// Manager questions
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
// Employee questions
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


//Empty array to add employees.
const employees = []

//Main function
function addEmployee(){
    prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ["Add and employee", "Create roster"]
    })
    .then(data => {
        console.log("You chose: ", data.choice);
        if(data.choice === "Add an employee"){
            prompt(employeePrompt)
            .then(data => {
                console.log("answers for employee: ", data);
                if(data.role === "Engineer"){
                    const emp = new Engineer(data.name, data.id, data.email, data.extra);
                    employees.push(emp)
                }else{
                    const emp = new Intern(data.name, data.id, data.email, data.extra);
                    employees.push(emp)
                };
                console.log(`${data.role} added to team!`);
                setTimeout(addEmployee, 1500);
            });
        }else{
            createHTML();
        };
    });
}




