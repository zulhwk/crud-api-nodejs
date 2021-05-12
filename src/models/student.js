'use strict';

var con = require('./../../config/db.config');

var Student = function (data) {
  this.firstname    = data.firstname;
  this.lastname     = data.lastname;
  this.email        = data.email;
  this.phone        = data.phone;
  this.nis          = data.nis;
  this.address      = data.address;
};

Student.create = function (body, result) {
  con.query("INSERT INTO students set ?", body, function (err, res){
    if(err){
      console.log(err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
}

Student.dataStudents = function (res) {
  con.query("SELECT * FROM students", function (res, err) {
    if (res) {
      console.log("DATA STUDENTS", res);
      result(null, res);
    } else {
      console.log("ERRORS", err);
      result(null, res);
    }
  });
}

module.exports = Student;