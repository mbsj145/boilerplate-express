let express = require('express');
let app = express();

console.log("Hello World");

// Serve static assets
app.use('/public', express.static(__dirname + '/public'));

// Serve HTML file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// 👇 Serve JSON
app.get('/json', function (req, res) {
  res.json({ message: "Hello json" });
});

module.exports = app;
