module.exports = function(app) {
  var controller = require("../controller/appController");

  // controller Routes
  app.route("/edit")
  .get(controller.list_all_users);
  app.route("/update/:id")
  .get(controller.getUserById)
  .post(controller.update_a_user_by_id);

  app.route("/updateDonar/:id")
  .post(controller.update_a_donar_by_id)
  app.route("/createDonar/:id")
  .post(controller.create_donar)


  app.route("/login/:username")
  .get(controller.getUserByUsername)
  .post(controller.getUserByUsername);

  app.route("/edit/:id")
  .get(controller.getUserById)
 // .get(controller.getDonarById);

  app.route("/users/")
  .get(controller.list_all_users)

  app.route("/donars/:id")
  .get(controller.getAllDonars)
  app.route("/donars/:bloodtype")
  .get(controller.getAllDonars)
  app.route("/email/:location/:bloodtype")
  .get(controller.getAllDonarsBoroBlood)
  app.route("/contact/:location")
  .get(controller.getDonarByBloodType)
  app.route("/contact/:location")
  .get(controller.getAllDonarsBoroBlood)

  app.route("/hospitals/")
  .get(controller.getAllHospitalsBloodLevels)
  app.route("/hospitals/:location")
  .get(controller.filterHospitalsByBorough)

  app.route("/createaccount")
  .post(controller.create_account)
  .post(controller.create_donar);

  app.route("/delete/:id")
  .get(controller.delete_a_user);

  app.route("/thankyou/:location")
  .get(controller.getAllHospitalsThankyou);
};