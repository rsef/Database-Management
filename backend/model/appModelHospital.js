var sql = require('./db.js');

//Hospitals object constructor
var Hospital = function(hospital){
    this.location = hospital.location;
    this.hospital_name = hospital.hospital_name;    
};
Hospital.createHospitals= function (newHospital, result) {    
    sql.query("INSERT INTO hospitals set ?", newHospital, function (err, res) {
            
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
Hospital.getHospitalByHospitalname = function (hospital_name, result) {  
    sql.query("Select * from hospitals where hospital_name = ? ", hospital_name, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};
Hospital.getHospitalById = function (hospitalID, result) {
sql.query("Select * from hospitals where id = ? ", hospitalId, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
      
        }
    });   
};
Hospital.getHospitalByLocation = function (location, result) {
    sql.query("Select * from hospitals where location = ? ", location, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log("found a hospital",res);
                result(null, res);
          
            }
        });   
    };
Hospital.getAllHospitals = function (result) {
    sql.query("Select * from hospitals", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('hospitals : ', res);  

             result(null, res);
            }
        });   
};
Hospital.updateByHospitalname = function(hospital,hospital_name, result){
sql.query("UPDATE hospitals SET hospital = ? WHERE hospital_name = ?", [hospital,hospital_name], function (err, res) {
      if(err) {
          console.log("error: ", err);
            result(null, err);
         }
       else{   
         result(null, res);
            }
        }); 
};

Hospital.updateById = function(id,hospital, result){
sql.query("UPDATE hospitals SET ? WHERE id = ?", [hospital,id], function (err, res) {
        if(err) {
            console.log("error: ", err);
              result(null, err);
           }
         else{   
           result(null, res);
              }
          }); 
};
Hospital.remove = function(id, result){
 sql.query("DELETE FROM hospitals WHERE id = ?", id, function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
                console.log('hospital deleted')
             result(null, res);
            }
        }); 
};


module.exports= Hospital;
