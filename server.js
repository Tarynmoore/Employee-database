const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config();

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
                name: 'View all roles',
                value: 'View_Roles'
              },
              {   
                name: 'View all employees',
                value: 'View_Employees'
              },
              {
                name: 'Add a department',
                value: 'Add_Department'
              }, 
              {
                name: 'Add a role',
                value: 'Add_Role'
              },
              {
                name: 'Add a employee',
                value: 'Add_Employee'
              },
              {
                name: 'Update employee role',
                value: 'Update_Employee_Role'
              }
          ]
        }
    ]).then(res => {
        const choice = res.choices

        if (choice === 'View_Roloes') {
            viewRoles()
        } 
    })
}

function viewRoles() {
    // let sql = `SELECT * FROM role`
    // db.query(sql, (err, result) => {
    //     if (err){
    //         return 
    //     } else {
    //        console.log()
    //     }
    // }
}
    // .then(res => {
    //   const choice = res.choices
    //   console.log(choice)
    // }


        
//         if (choice ===  'View all roles') {
//             db.query('SELECT (*) FROM roles', function(results) {
//                 console.log(results)
//             })
//         }
//     })

questions();