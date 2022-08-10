var express = require('express');
require('dotenv').config();
const port = process.env.PORT;
var api = require('./api');
var app = express();

app.use('/',api);
/*
// set the view engine to ejs
app.set("view engine", "ejs")

// use res.render to load up an ejs view file

// index page
app.get("/",(req,res)=>{
    res.render("mainPage");
  });
*/
//routes
const route = require('./routes/routes');
const db = require("./models");
//
db.sequelize.sync({force:true});
app.use("/api_v1",route(express));
app.use(express.json()); 
app.listen(port);
console.log('Se Fue La Luz '+port);