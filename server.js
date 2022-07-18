const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require("console.table");
require('dotenv').config();
const express = require('express');
const { listen } = require('express/lib/application');

const db = mysql.createConnection(
    {
        host: 'localhost', 
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'employees' 
    },
    console.log(`connected to db`)
);


const questions = () => {
    inquirer.prompt([
        {
          type: 'list',
          name: 'choice',
          message: 'Select an option from below',
          choices: [
              {
                name: 'View all roles'
              },
              {   
                name: 'View all employees'
              }, 
              {
                name: 'View all departments'
              },
              {
                name: 'Add a department'
              }, 
              {
                name: 'Add a role'
              },
              {
                name: 'Add a employee'
              },
              {
                name: 'Update employee role'     
             }
          ]
        }
    ]).then(res => {
        const choice = res.choice
        console.log(choice)

        if (choice === 'View all roles') {
            viewRoles();
        } 

        if (choice === 'View all employees') {
            viewEmployees();
        }

        if (choice === 'View all departments') {
            viewDepartments();
        }

        if (choice === 'Add a department') {
            addDepartment(); 
        }

        if (choice === 'Add a role') {
            addRole();
        }

        if (choice === 'Add a employee') {
            addEmployee();
        }

        if (choice === 'Update employee role') {
            updateRole();
        }

    })
}

function viewRoles() {
    let sql = `SELECT * FROM role`
    db.query(sql, (err,rows) => {
       console.table(rows)
       return questions();
    }
)};

function viewEmployees() {
    let sql  = `SELECT * FROM employees`
    db.query(sql, (err,rows) => {
        console.table(rows)
        return questions(); 
    })
};

function viewDepartments() {
    let sql = `SELECT * FROM departments`
    db.query(sql, (err,rows) => {
        console.table(rows);
        return questions();
    })
}
  
function addDepartment() {
    inquirer.prompt([
        {
            type: 'number',
            name: 'role_id',
            message: 'What is ID of the role?'
        },
        {
            type: 'input',
            name: 'department',
            message: 'Which department would you like to add?',
        }
    ]).then(answers => {
        console.log(answers);
        let sql =`INSERT INTO departments (id, name) 
                VALUES (?, ?)`;
        const params = [
            answers.role_id,
            answers.department];
        
        db.query(sql, params, (err, rows) => {
            console.log("Department added");
            console.table(rows);
            return questions();
        });
    })
}

function addRole() {
    inquirer.prompt([
        {
            type: 'number',
            name: 'role_id',
            message: 'What is the role ID'
        },
        {
            type: 'input',
            name: 'role_title',
            message: 'What is the name of the role?'
        },
        {
            type: 'input',
            name: 'role_salary',
            message: 'What is the salary?'
        },
        {
            type: 'number',
            name: 'role_department',
            message: 'Which department ID number does the role belong to?'
        }
    ])
    .then(answers => {
        console.log(answers);
        let sql = `INSERT INTO role (id, title, salary, department_id) VALUES (?, ?, ?, ?)` 
        const params = [
            answers.role_id,
            answers.role_title,
            answers.role_salary,
            answers.role_department
        ];

        db.query(sql, params, (err, rows) => {
            console.log("Role added");
            return questions();
        })
    })
};

function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'What is the employees first name?'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'What is employees last name?'
        }, 
        {
            type: 'number',
            name: 'employee_role',
            message: 'What is employees role ID?'
        },
        {
            type: 'number',
            name: 'employee_manager',
            message: 'What is employees manager ID?'
        },
    ])
    .then(answers => {
        let sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
                VALUES (?, ?, ?, ?)`
        const params = [
            answers.first_name,
            answers.last_name,
            answers.employee_role,
            answers.employee_manager
        ]

        db.query(sql, params, (err, rows) => {
            console.log('Employee added successfully');
            questions();
        })
    }) 
};

function updateRole() {
    // let employees = [];
    db.query(`SELECT employees.first_name, employees.last_name
            FROM employees`, (err, res) => {
          console.table(res);
    })
  
    
    inquirer.prompt([
        {
            type: 'list',
            name: 'employees',
            message: 'Which employees role would you like to update?',
            choices: 'names'
        }
    ])
};

questions();