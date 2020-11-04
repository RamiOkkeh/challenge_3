const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/orders');

let orderSchema = mongoose.Schema({
  name: String,
  email: String,
  pass: String,
  add1: String,
  add2: String,
  city: String,
  state: String,
  zipcode: Number,
  phone: Number,
  creditnum: Number,
  exp: String,
  zip: Number
});

let Order = mongoose.model('Order', orderSchema);

let save = (order, callback) => {
  Order.create({
    name: order.name,
    email: order.email,
    pass: order.pass,
    add1: order.address1,
    add2: order.address2,
    city: order.city,
    state: order.state,
    zipcode: order.zipCode,
    phone: order.phone,
    creditnum: order.creditNum,
    exp: order.expDate,
    zip: order.zip
  }, callback);
};

let find = (callback) => {
  Order.find((err, repos) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, repos);
    }
  });
};

module.exports.save = save;
module.exports.find = find;
