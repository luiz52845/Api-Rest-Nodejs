const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//  porta do heroku 
//var porta = process.env.PORT || 8080;

// iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodepai', { useNewUrlParser: true }

);
requireDir('./src/models');

const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));

app.listen(3001);