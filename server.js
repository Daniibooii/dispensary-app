var express = require("express");
var bodyParser = require("body-parser");
// set up express app
var app = require("./models");
//require models for syncing
var db = require("./models");

// set up express to handle data parsing

//parse application
app.use(bodyParser.urlencoded({ extended: true}));
//parse app/json
app.use(bodyParser.json());

//static directory
app.use(express.static("public"));

//routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//syncing models and starting express
db.sequelize.sync({ force: true}).then(function() {
    app.listen(PORT, function() {
        console.log(`App listening on PORT ${PORT}.`);
    });
});