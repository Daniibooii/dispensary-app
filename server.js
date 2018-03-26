const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require('path');

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  return res.render('index', {});
});




app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log('Relative path', path.join(__dirname, 'public'));
  console.log(`Server listening on: http://localhost: ${PORT}`);
});
