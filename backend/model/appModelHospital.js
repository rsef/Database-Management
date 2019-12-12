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
          console.log('users : ', res);  

         result(null, res);
        }
    });   
};
Hospital.getAllHospitalsBloodLevels = function (result) {
    sql.query("select hospitals.location, hospitals.hospital_name,blood_level.percentage_stored, blood_level.blood_type,blood_level.date_of_report from blood_level inner join hospitals ON blood_level.hospital_name=hospitals.hospital_name order by blood_level.date_of_report DESC,blood_level.percentage_stored ASC,hospitals.location", function (err, res) {
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
Hospital.filterBloodByBoro = function (location,result) {
    sql.query("select hospitals.location, hospitals.hospital_name,blood_level.percentage_stored, blood_level.blood_type,blood_level.date_of_report from blood_level inner join hospitals ON blood_level.hospital_name=hospitals.hospital_name where hospitals.location = ? order by blood_level.date_of_report DESC,blood_level.percentage_stored ASC,hospitals.location",[location], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
          console.log('hospitals : ', location);  

         result(null, res);
        }
    });   
};
Hospital.getHospitalThankYou = function (location,result) {
    sql.query("select hospitals.location, hospitals.hospital_name,users.firstname, users.lastname from users inner join hospitals ON users.location=hospitals.location where hospitals.location = ? ", [location], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
          console.log(location,'hospitals test : ', res);  

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
