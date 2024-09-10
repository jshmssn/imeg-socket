const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'mysql11.serv00.com',
  user: 'm7498_root',
  password: 'Lokomoko123$',
  database: 'm7498_imeg',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database.');
});

module.exports = db;
