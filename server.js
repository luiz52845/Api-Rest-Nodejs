const express = require('express');

const app = express();

var porta = process.env.PORT || 8080;


app.get("/", (req, res)=>{
  res.send('Olá Mundo')
});




app.listen(porta);