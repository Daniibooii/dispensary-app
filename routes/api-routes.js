

// current API: Otreeba Open Cannabis API
// API info: https://api.otreeba.com/swagger/
// API key: 3f948fd11858fb86dcc7dab04845697432160d6b [keep it secret, keep it safe]
// how to use API key: place in header as: X-API-Key: 3f948fd11858fb86dcc7dab04845697432160d6b

// awaiting confirmation of request for API key from Cannabis Reports
// Symptom Checker won't give us access to more than a "sandbox" API for now; we may not need it anyway



// template below //
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Todo.findAll({}).then(function(dbTodo) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // POST route for saving a new todo
  app.post("/api/todos", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {

  });

  // PUT route for updating todos. We can get the updated todo from req.body
  app.put("/api/todos", function(req, res) {

  });
};
