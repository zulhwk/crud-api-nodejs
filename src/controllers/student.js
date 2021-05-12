'use strict';

const Students = require('../models/student');

exports.dataStudents = function (req, res) {
  Students.dataStudents(function (err, student) {
    if (err) {
      console.log("ERRORS", err);
    } else {
      res.send(student);
    }
  });
}