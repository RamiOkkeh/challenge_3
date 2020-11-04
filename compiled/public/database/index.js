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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9kYXRhYmFzZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJjb25uZWN0Iiwib3JkZXJTY2hlbWEiLCJTY2hlbWEiLCJPcmRlciIsIm1vZGVsIiwic2F2ZSIsIm9yZGVyIiwiY2FsbGJhY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxXQUFXQyxRQUFRLFVBQVIsQ0FBakI7QUFDQUQsU0FBU0UsT0FBVCxDQUFpQiw0QkFBakI7O0FBRUEsSUFBSUMsY0FBY0gsU0FBU0ksTUFBVCxDQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUmtDLENBQWhCLENBQWxCOztBQVdBLElBQUlDLFFBQVFMLFNBQVNNLEtBQVQsQ0FBZSxPQUFmLEVBQXdCSCxXQUF4QixDQUFaOztBQUVBLElBQUlJLE9BQU8sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEtBQXFCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0MsQ0FSRDs7QUFVQUMsT0FBT0MsT0FBUCxDQUFlSixJQUFmLEdBQXNCQSxJQUF0QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxubW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL2xvY2FsaG9zdC9vcmRlcnMnKTtcclxuXHJcbmxldCBvcmRlclNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYSh7XHJcbi8vICAgaWQ6IE51bWJlcixcclxuLy8gICBuYW1lOiBTdHJpbmcsXHJcbi8vICAgdXNlcm5hbWU6IFN0cmluZyxcclxuLy8gICByZXBvOiB7XHJcbi8vICAgICB0eXBlOiBTdHJpbmcsXHJcbi8vICAgICB1bmlxdWU6IHRydWVcclxuLy8gICB9LFxyXG4vLyAgIGZvcmtzOiBOdW1iZXJcclxufSk7XHJcblxyXG5sZXQgT3JkZXIgPSBtb25nb29zZS5tb2RlbCgnT3JkZXInLCBvcmRlclNjaGVtYSk7XHJcblxyXG5sZXQgc2F2ZSA9IChvcmRlciwgY2FsbGJhY2spID0+IHtcclxuLy8gICBSZXBvLmNyZWF0ZSh7XHJcbi8vICAgICBpZDogcmVwby5pZCxcclxuLy8gICAgIG5hbWU6IHJlcG8ubmFtZSxcclxuLy8gICAgIHVzZXJuYW1lOiByZXBvLm93bmVyLmxvZ2luLFxyXG4vLyAgICAgcmVwbzogcmVwby5zdm5fdXJsLFxyXG4vLyAgICAgZm9ya3M6IHJlcG8uZm9ya3NcclxuLy8gICB9LCBjYWxsYmFjayk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5zYXZlID0gc2F2ZTsiXX0=