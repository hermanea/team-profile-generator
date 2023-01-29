const inquirer = require("inquirer");
const fs = require("fs");

const generateHtml = require("./util/generateHtml.js")
const Engineer = require("./lib/Engineer.js")
const Manager = require("./lib/Manager.js")
const Intern = require("./lib/Intern.js")

const teamProfiles = [];

const start = async () => {
    try {
        const managerInfo = await inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Please enter the name of your team manager."
            },
            {
                type: "input",
                name: "managerId",
                message: "Please enter the ID associated with your team manager."
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please enter the email address of your team manager. "
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Please enter the office number of your team manager."
            }
        ])
        teamProfiles.push(new Manager(managerInfo.managerName, managerInfo.managerId, managerInfo.managerEmail, managerInfo.managerOfficeNumber))
        manager = managerInfo.managerName
        console.log(manager);
        await addTeamMembers()

    }
    catch (err) {
        console.log(err)
    }
}

start()

const addTeamMembers = async () => {
    const employee = await inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'Please select an employee to add to your team.',
            choices: ["Engineer", "Intern", "None"]
        },
    ])
    if (employee.type === "Engineer") {
        addEngineer()
    } else if (employee.type === "Intern") {
        addIntern()
    } else if (employee.type === "None") {
        teamComplete()
    }
}

const teamComplete = async () => {
    const user = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'choice',
            message: ''
        }
    ])
    const text = generateHtml(teamProfiles)
    if (user.choice) {
        console.log('Goodbye!');
        fs.writeFile('./index.html', text, (err) => {
            if(err){
                console.log(err)
            }
        })
    } else {
        addTeamMembers()
    }
}

const addEngineer = async () => {
    const employee = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of your engineer.',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the ID associated with your engineer.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address of your engineer.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the GitHub username of your engineer',
        },
    ])
    teamProfiles.push(new Engineer(employee.name, employee.id, employee.email, employee.github))
    // engineers.push((employee.name))
    addTeamMembers()
}

const addIntern = async () => {
    const employee = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of your intern.',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the ID associated with your intern.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address of your intern.',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the school attended by your intern.',
        },
    ])
    teamProfiles.push(new Intern(employee.name, employee.id, employee.email, employee.school))
    // interns.push((employee.name))
    addTeamMembers()
}