require('dotenv').config();
let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://muhammadbilal_db_user:nnFnqxi73A9MqkHz@cluster0.rcxmcoo.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
