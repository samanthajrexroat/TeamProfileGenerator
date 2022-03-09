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

//Command line prompt functionality for engineer and intern.
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

//Access the global employees array and create dynamic HTML
function createHTML(){
    console.log("Creating HTML!");
    console.log("All of your employees: ", employees);

    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./reset.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Profile Generator</title>
</head>
<body>
    <header id="dashHead"class="d-flex justify-content-center align-items-center bg-warning bg-gradient text-secondary fw-bolder" style="height: 100px">
        <h1>My Team</h1>
    </header>

    <div class="container">
        ${employees.map(employee => employee.generateHTMLCard(employee.officeNumber || employee.gitHub || employee.school)).join("\n")}
    </div>    
</body>
</html>`

    fs.writeFileSync("./dist/output.html", html);
    console.log("HTML generated. Please check the dist directory for your new html!");
}

//Initial function. Manager creation.
function main(){
    prompt(managerPrompt).then(data => {
        console.log(data);
        const manager = new Manager(data.managerName, data.id, data.email, data.officeNumber);
        employees.push(manager);
        addEmployee();
    })
}

main();