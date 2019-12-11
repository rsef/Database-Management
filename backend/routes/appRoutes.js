module.exports = function(app) {
  var controller = require("../controller/appController");

  // controller Routes
  app.route("/edit")
  .get(controller.list_all_users);
  app.route("/update/:id")
  .get(controller.getUserById)
  .post(controller.update_a_user_by_id);

  app.route("/login/:username")
  .get(controller.getUserByUsername)
  .post(controller.getUserByUsername);

  app.route("/edit/:id")
  .get(controller.getUserById)
 // .get(controller.getDonarById);

  app.route("/users/")
  .get(controller.list_all_users)
  app.route("/donars/")
  .get(controller.getAllDonars)

  app.route("/createaccount")
  .post(controller.create_account)
  .post(controller.create_donar);

  app.route("/delete/:id")
  .get(controller.delete_a_user);
  
  app.route("/thankyou/:location")
  .get(controller.getHospitalByLocation);
};