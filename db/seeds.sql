 INSERT INTO departments (id, name)
 VALUES (10, "Manager"),
        (11, "Chef"),
        (21, "Back of House"),
        (31, "Front of House");

 INSERT INTO role (id, title, salary, department_id)
 VALUES (001, "Manager", 75000, 10),
        (002, "Kitchen Chef", 80000, 11),
        (003, "Sushi Chef", 80000, 11),
        (004, "Dishwasher", 35000, 21),
        (005, "Server", 40000, 31),
        (006, "Host", 25000, 31);

 INSERT INTO employees (id, first_name, last_name, role_id, department, manager_id)
 VALUES (100, "Harry", "Styles", 001, 'Manager', null),
        (101, "Chris", "Hemsworth", 001, 'Manager', null),
        (200, "Khloe", "Kardashian", 002, 'Chef', 100),
        (201, "Kylie", "Jenner", 002, 'Chef', 100),
        (300, "Doja", "Cat", 003, 'Chef', 101),
        (301, "Kendall", "Jenner", 003, 'Chef', 101),
        (400, "Kourtney", "Kardashian", 004, 'Back of House', 100),
        (401, "Kris", "Jenner", 004, 'Back of House', 100),
        (500, "Travis", "Barker", 005, 'Front of House', 101),
        (501, "Kim", "Kardashian", 005, 'Front of House', 101),
        (600, "Stormi", "Webster", 006, 'Front of House', 101),
        (601, "Mason", "Disick", 006, 'Front of House', 101);
        

