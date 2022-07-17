DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE departments (
    id INT NOT NULL,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employees (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    department VARCHAR(30) NOT NULL,
    manager_id INT
);