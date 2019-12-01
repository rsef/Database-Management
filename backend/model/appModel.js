var sql = require('./db.js');

//User object constructor
var User = function(user){
    this.firstname =user.firstname;
    this.lastname = user.lastname;    
    this.username = user.username;
    this.email = user.email;
    this.pass = user.passw;
    this.age = user.age;
    this.phone =user.phone;
    this.sex = user.sex;
//    this.diseases = user.diseases;
};
User.createUser = function (newUser, result) {    
        sql.query("INSERT INTO users set ?", newUser, function (err, res) {
                
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
User.getUserByUsername = function (userName, result) {  
        sql.query("Select * from users where username = ? ", userName, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
User.getAllUsers = function (result) {
        sql.query("Select * from users", function (err, res) {

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
User.updateByUsername = function(user,username, result){
  sql.query("UPDATE users SET user = ? WHERE username = ?", [user,user.username], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
User.remove = function(username, result){
     sql.query("DELETE FROM users WHERE username = ?", [username], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= User;