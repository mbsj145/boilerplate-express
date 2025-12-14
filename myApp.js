require('dotenv').config();

let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

console.log("Hello World");

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

// Root-level logger
app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

// Body-parser for POST requests
app.use(bodyParser.urlencoded({ extended: false }));

// ... rest of your routes here

module.exports = app;
