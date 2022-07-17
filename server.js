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
console.log(db);

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
            type: 'input',
            name: 'department',
            message: 'Which department would you like to add?',
        }
    ]).then(answers => {
        let sql =`INSERT INTO departments (name) VALUES (?)`;
        let params = [answers.departmentName];
        
        db.query(sql, params, (err, rows) => {
            console.log("Department added");
            return questions();
        });
    })
}

// function addRole() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: ''
//         }
//     ])
// }


questions();