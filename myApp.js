require('dotenv').config();

let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

console.log("Hello World");

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

// Root-level logger middleware
app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files
app.use('/public', express.static(__dirname + '/public'));

// Time server
app.get('/now', function (req, res, next) {
  req.time = new Date().toString();
  next();
}, function (req, res) {
  res.json({ time: req.time });
});

// Echo server
app.get('/:word/echo', function (req, res) {
  res.json({ echo: req.params.word });
});

// GET and POST /name
app.route('/name')
  .get(function (req, res) {
    res.json({ name: `${req.query.first} ${req.query.last}` });
  })
  .post(function (req, res) {
    res.json({ name: `${req.body.first} ${req.body.last}` });
  });

// Serve HTML
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// JSON API
app.get('/json', function (req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") message = message.toUpperCase();
  res.json({ message: message });
});

module.exports = app;
