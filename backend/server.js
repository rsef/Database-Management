const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
//const db = require("./model/db");
const PORT = 4000;


var mysql = require('mysql');

//local mysql db connection
var mc = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'maindb'
});

mc.connect();

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routes/appRoutes"); //importing route
routes(app); //register the route
