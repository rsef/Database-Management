var sql = require('./db.js');

//Donar object constructor
var Donar = function(donar){
    this.firstname = donar.firstname;
    this.lastname = donar.lastname;    
    this.email = donar.email;
    this.weight = donar.weight;
    this.diseases = donar.diseases;
    this.bloodtype = donar.blood_type;
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
sql.query("UPDATE donar_info SET ? WHERE id = ?", [donar,id], function (err, res) {
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
