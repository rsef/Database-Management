var User = require("../model/appModelUser.js");
var Donar = require("../model/appModelDonar.js");
var Hospital = require("../model/appModelHospital.js");

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
exports.getUserById = function(req, res) {
  User.getUserById(req.params.id, function(err, user) {
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
exports.update_a_user_by_id = function(req, res) {
  User.updateById(req.params.id, new User(req.body), function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.create_donar = function(req, res) {
  var new_donar = new Donar(req.body);
  //handles null error
  if (!new_donar.firstname|| !new_donar.lastname) {
    res
      .status(400)
      .send({ error: true, message: "Please provide both a first name and a last" });
  } else {
    console.log('Creating a new user');
    Donar.createDonar(new_donar, function(err, donar) {
      if (err) res.send(err);
      res.json(donar);
    });
  }
};


exports.delete_a_user = function(req, res) {
  User.remove(req.params.id, function(err, user) {
    if (err) res.send(err);
    res.json({ message: "User successfully deleted" });
  });
};
exports.getAllDonars = function(req, res) {
  Donar.getAllDonars(req.params.id, function(err, donar) {
    if (err) res.send(err);
    res.json(donar);
  });
};
exports.getDonarById = function(req, res) {
  Donar.getDonarById(req.params.id, function(err, donar) {
    if (err) res.send(err);
    res.json(donar);
  });
};
exports.delete_a_donar = function(req, res) {
  Donar.remove(req.params.id, function(err, donar) {
    if (err) res.send(err);
    res.json({ message: "Donar successfully deleted" });
  });
};
exports.update_a_donar_by_id = function(req, res) {
  Donar.updateById(req.params.id, new Donar(req.body), function(err, donar) {
    if (err) res.send(err);
    res.json(donar);
  });
};
exports.getAllHospitals = function(req, res) {
  Hospital.getAllHospitals(function(err, hospital) {
    if (err) res.send(err);
    res.json(hospital);
  });
};
exports.getAllHospitalsBloodLevels = function(req, res) {
  Hospital.getAllHospitalsBloodLevels(function(err, hospital) {
    if (err) res.send(err);
    res.json(hospital);
  });
};
exports.update_a_hospital_by_id = function(req, res) {
  Hospital.updateById(req.params.id, new Hospital(req.body), function(err, donar) {
    if (err) res.send(err);
    res.json(donar);
  });
};
exports.getHospitalByName = function(req, res) {
  Hospital.getHospitalByHospitalname(req.params.hospital_name, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};
exports.getHospitalById = function(req, res) {
  Hospital.getHospitalById(req.params.id, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};
exports.getHospitalByLocation = function(req, res) {
  Hospital.getHospitalByLocation(req.params.location, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.update_a_Hospital = function(req, res) {
  Hospital.updateByHospitalname(req.params.hospital_name, new Hospital(req.body), function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};