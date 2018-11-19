let mySQLPassword = process.env.MYSQL_PASSWORD;
// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: mySQLPassword,
  database: "amazon"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
console.log(mySQLPassword);

// Export connection for our ORM to use.
module.exports = connection;
