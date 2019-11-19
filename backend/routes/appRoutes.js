module.exports = function(app) {
  var controller = require("../controller/appController");

  // controller Routes
  app.route("/createaccount").post(controller.create_account);

  app.route("/login/:username").post(controller.login);
};