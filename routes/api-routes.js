

// current API: Otreeba Open Cannabis API
// API info: https://api.otreeba.com/swagger/
// API key: 3f948fd11858fb86dcc7dab04845697432160d6b [keep it secret, keep it safe]
// how to use API key: place in header as: X-API-Key: 3f948fd11858fb86dcc7dab04845697432160d6b

// awaiting confirmation of request for API key from Cannabis Reports
// Symptom Checker won't give us access to more than a "sandbox" API for now; we may not need it anyway



// template below //
// Requiring our Todo model
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/members");
  });

  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    }
    else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

};
