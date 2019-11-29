module.exports = function(app) {
  var controller = require("../controller/appController");

  // controller Routes
  app.route("/")
  .get(controller.list_all_users);

  app.route("/createaccount")
  .get(controller.list_all_users)
  .post(controller.create_account);

  app.route("/login/:username")
  .get(controller.getUserByUsername)
  .post(controller.getUserByUsername);
};