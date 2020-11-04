const path = require('path');
const express = require('express');
const { send } = require('process');
let app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get(__dirname + '/client/app.jsx', (req, res) => {
  res.send('ppppp');
});

app.post('/checkout', (req, res) => {
  res.json(req.body);
});



let port = 3002;

app.listen(port, () => {
  console.log('Listening on port: ' + port);
});


module.exports = app;