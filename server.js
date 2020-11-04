const path = require('path');
const express = require('express');
// const { send } = require('process');
const db = require('./public/database/index');
let app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/checkout', (req, res) => {
  // res.send(req.body);
  db.save(req.body, (err, data) => {
    if (err) { res.status(500); } else { res.status(201); res.send('your puchase has been completed'); }
  });
});

app.get('/checkout', (req, res) => {
  db.find((err, data) => {
    if (err) { res.status(500); } else { console.log(data); res.json(data); }
  });
});



let port = 3002;

app.listen(port, () => {
  console.log('Listening on port: ' + port);
});


module.exports = app;