const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/orders');

let orderSchema = mongoose.Schema({
//   id: Number,
//   name: String,
//   username: String,
//   repo: {
//     type: String,
//     unique: true
//   },
//   forks: Number
});

let Order = mongoose.model('Order', orderSchema);

let save = (order, callback) => {
//   Repo.create({
//     id: repo.id,
//     name: repo.name,
//     username: repo.owner.login,
//     repo: repo.svn_url,
//     forks: repo.forks
//   }, callback);
};

module.exports.save = save;