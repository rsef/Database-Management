var User = require("../model/appModel.js");

exports.list_all_users = function(req, res) {
  User.getAllUsers(function(err, user) {
    if (err) res.send(err);
    console.log(res, user);
    res.send(user);
  });
};

exports.create_account = function(req, res) {
  var new_user = new User(req.body);
  //handles null error
  if (!new_user.firstname|| !new_user.lastname) {
    res
      .status(400)
      .send({ error: true, message: "Please provide both a first name and a last" });
  } else {
    console.log('Creating a new user');
    User.createUser(new_user, function(err, user) {
      if (err) res.send(err);
      res.json(user);
    });
  }
};

exports.getUserByUsername = function(req, res) {
  User.getUserByUsername(req.params.username, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.update_a_user = function(req, res) {
  User.updateByUsername(req.params.username, new User(req.body), function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.delete_a_user = function(req, res) {
  User.remove(req.params.username, function(err, user) {
    if (err) res.send(err);
    res.json({ message: "User successfully deleted" });
  });
};
