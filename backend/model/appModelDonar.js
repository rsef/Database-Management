var sql = require('./db.js');

//Donar object constructor
var Donar = function(donar){
    this.firstname = donar.firstname;
    this.lastname = donar.lastname;    
    this.email = donar.email;
    this.weight = donar.weight;
    this.diseases = donar.diseases;
    this.bloodtype = donar.blood_type;
    this.userID = donar.userID;
};
Donar.createDonar = function (newDonar, result) {    
    sql.query("INSERT INTO donar_info set ?", newDonar, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });           
};

Donar.getDonarByDonarname = function (firstname, result) {  
    sql.query("Select * from donar_info where firstname = ? ", firstname, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};
Donar.getDonarByBloodType = function (blood_type, result) {  
    sql.query("Select * from donar_info where bloodtype = ? ", [blood_type], function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};
Donar.getDonarById = function (donarId, result) {
sql.query("Select * from donar_info where id = ? ", donarId, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
      
        }
    });   
};
Donar.getAllDonars = function (result) {
    sql.query("Select * from donar_info", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('donar_info : ', res);  

             result(null, res);
            }
        });   
};
Donar.getAllDonarsBoroBlood = function (donarBoro,donarBlood,result) {
    sql.query("Select donar_info.firstname,donar_info.lastname,donar_info.email,users.phone,donar_info.bloodtype,users.location from donar_info inner join users ON users.userID = donar_info.userID where location = ? and bloodtype = ? order by donar_info.firstname,donar_info.lastname",[donarBoro,donarBlood], function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('donar_info : ', res,donarBoro,donarBlood);  

             result(null, res);
            }
        });   
};

Donar.getAllInfo = function (userIDInfo, result) {    
    sql.query("select users.firstname,users.lastname,users.email,users.age,users.phone,users.sex,users.location,donar_info.diseases,donar_info.weight,donar_info.bloodtype from donar_info inner join users ON users.firstname = donar_info.firstname and users.lastname = donar_info.lastname and users.email = donar_info.email where donar_info.userID = ? order by donar_info.firstname, donar_info.lastname ", userIDInfo, function (err, res) {
            
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log("param",res);
                result(null, res);
            }
        });           
};
Donar.updateByDonarfirstname = function(donar,firstname, result){
sql.query("UPDATE donar_info SET donar = ? WHERE firstname = ?", [donar,donar.firstname], function (err, res) {
      if(err) {
          console.log("error: ", err);
            result(null, err);
         }
       else{   
         result(null, res);
            }
        }); 
};

Donar.updateById = function(id,donar, result){
sql.query("insert into donar_info set ? on DUPLICATE KEY UPDATE donar_info.firstname = donar.firstname, donar_info.lastname = donar.lastname, donar_info.email = donar.email, donar_info.weight = donar.weight,donar_info.diseases = donar.diseases,donar_info.bloodtype = donar.bloodtype WHERE userID = ?", [donar,id], function (err, res) {
        if(err) {
            console.log("error: ", err);
              result(null, err);
           }
         else{   
           result(null, res);
              }
          }); 
};
Donar.remove = function(id, result){
 sql.query("DELETE FROM donar_info WHERE id = ?", id, function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
                console.log('donar deleted')
             result(null, res);
            }
        }); 
};


module.exports= Donar;
