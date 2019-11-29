const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./model/db");


const PORT = 4000;


//local mysql db connection
var mydb = db;


app.use(cors());

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routes/appRoutes"); //importing route
routes(app); //register the route
