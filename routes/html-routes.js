
// template below //
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads login.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  //
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  //
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/resources.html"));
  });

  // authors route loads author-manager.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

};
