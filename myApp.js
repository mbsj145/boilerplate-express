let express = require('express');
let app = express();

console.log("Hello World");

// Serve HTML file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
