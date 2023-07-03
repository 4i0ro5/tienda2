CREATE DATABASE IF NOT EXISTS tienda2;

USE tienda2;

CREATE TABLE registro(
    id int NOT NULL auto_increment PRIMARY KEY,
    username VARCHAR(20),
    nam VARCHAR(20),
    ln VARCHAR(20),
    phone VARCHAR(12),
    email VARCHAR(30),
    pass VARCHAR(50)
)