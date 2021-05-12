'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_nodejs'
});

connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;