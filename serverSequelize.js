let dotenv = require('dotenv').config({ path: __dirname + '/.env' })
var express = require("express");
var exphbs = require('express-handlebars');

var db = require("./modelsSequelize");


var app = express();
var PORT = process.env.PORT || 8060;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





// Create an instance of the express-handlebars
// If you want to pass any option offered by express-handlebar module
// do it inside the create() in the handlebars.js file
var handlebars = require('./helpers/handlebars.js')(exphbs);

// The handlebars variable now has an object called engine.
// Use that to define your app.engine
// As said before, you don't need to define any options here.
// Everything is defined in the create() in handlebars.js
app.engine('handlebars', handlebars.engine);

// If you are using a different extension, you can change hbs to whatever you are using. 
// app.set('view engine', 'hbs');




// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/customerOrdersController.js");

app.use(routes);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Start our server so that it can begin listening to client requests.
db.sequelize.sync({}).then(function() {
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
});


let connection= require('./config/connection')
let sequelize= require('./config/connectionSequelize')

let orders = require("./MWS/ordersForInterval");
let orderItems = require("./MWS/orderItems");