const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'shrek',
  password: 'pass123',
  database: 'imbaza',
});

module.exports = connection;