//"NOT_SUPPORTED_AUTH_MODE" -> create new user auth mech -> 'mysql_native_password'
// mysql -u root -p password
//CREATE USER 'newuser'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'newpassword';
//GRANT ALL PRIVILAGES ON *.* TO 'newuser'@'localhost';
//FLUSH PRIVILAGES;

//mysql
const express = require("express");
const mysql = require("mysql");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "database",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected to MySQL Server");
});

app.get("/", (req, res) => {
  connection.query("SELECT * from people", (err, rows) => {
    if (err) throw err;
    console.log("The data: \n", rows);
    connection.end();
  });
});

//https://www.youtube.com/watch?v=qwfE7fSVaZM

// task

// frontend
// add employee ->form{emp num, name,department,basic salary}+create -> list entries{employee with edit+delete}
// edit -> form{...emp num not editable}
// delete -> delete list entry

// backend
// mysql db with employees

//hooks + redux
