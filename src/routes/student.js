const express = require('express');
const StudentController = require('../controllers/student');

const router = express.Router();

router.get('/api/student', StudentController.dataStudents);

module.exports = router;
