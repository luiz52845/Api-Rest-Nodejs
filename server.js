const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');
var http = require ('http');	 

//  porta do heroku 
var porta = process.env.PORT || 8080;

// iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
//ngoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true0 });


mongoose.connect('mongodb://heroku_0pbcbp44:e1a7fq36p46fhhcrcgai778f27@ds063177.mlab.com:63177/heroku_0pbcbp44', { useNewUrlParser: true });

requireDir('./src/models');

const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));

app.listen(porta);


/*
var uristring = 
  process.env.MONGODB_URI || 
  'mongodb://localhost/HelloMongoose';

  var theport = process.env.PORT || 5000;

  mongoose.connect(uristring, function (err, res) {
    if (err) { 
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
      console.log ('Succeeded connected to: ' + uristring);
    }
  });

  var found = ['DB Connection not yet established.  Try again later.  Check the console output for error messages if this persists.'];


    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      createWebpage(req, res);
    }).listen(theport);


*/
