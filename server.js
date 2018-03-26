var express = require("express");
var bodyParser = require("body-parser");
<<<<<<< HEAD
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
=======
var session = require("express-session");
var passport = require("./config/passport");

var PORT = process.env.PORT || 8080;
var db = require("./models");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
>>>>>>> f74bf3142a1b2e7f16f4055ab1aef7f0cc8679e1
