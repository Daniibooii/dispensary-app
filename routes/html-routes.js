
// template below //
var path = require("path");

var isAuthenticated = require('../config/middleware/isAuthenticated');
// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads login.html
  app.get("/", function (req, res, next) {
    //res.sendFile(path.join(__dirname, "../views/login.handlebars"));
    res.render('login');
  });

  app.get("/checkin", function (req, res) {
    res.render("checkin");
  });

  app.get("/signup", function (req, res) {
    res.render("signup");
  });


  //
  app.get("/cms", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  //
  app.get("/blog", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/resources.html"));
  });

  // authors route loads author-manager.html
  app.get("/authors", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

};
