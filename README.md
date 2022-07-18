# Employee Database 



## Description 
This is a terminal application only. As a restaurant owner I would like to keep track of all my employees in a single database. It show's the departments, roles, and employees. If you need to add a new department, role, or employee you can do it all through the terminal. Lastly if you need to update a role it can be done through the terminal. 

## Instructions 
First you must make sure your mysql password is put in the .envExample. Then change the name from '.envExample' to '.env' to get it to work with the the rest of the application. 

Next, open the db file in the terminal and open mysql. 
```bash
mysql -u root -p 
```
Get the sources of each sql file. 
```bash
source schema.sql 
source seeds.sql
quit
```
Open server.js in the terminal and install/start npm to begin the application 
```bash 
npm i -y 
npm start
```
Once the application begins you will be prompted with questions to do whatever you need!
