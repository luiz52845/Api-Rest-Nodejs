const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//  porta do heroku 
var porta = process.env.PORT || 5000;

var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/HelloMongoose';


// iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
//mongoose.connect('mongodb://localhost:27017/nodepai', { useNewUrlParser: true });


mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});


requireDir('./src/models');

const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));

app.listen(uristring || porta);