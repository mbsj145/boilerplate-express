require('dotenv').config();

let express = require('express');
let app = express();

console.log("Hello World");

// 👇 Root-level logger middleware
app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

// Static files
app.use('/public', express.static(__dirname + '/public'));

// Serve HTML
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// JSON API
app.get('/json', function (req, res) {
  let message = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }

  res.json({ message: message });
});

module.exports = app;
