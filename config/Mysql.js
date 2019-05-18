// RETUNS MYSQL DATABASE

const mysql = require('mysql'),
  { error } = require('handy-log'),
  { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env

// CREATES A DB CONNECTION
const db = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'wiki',
  charset: 'utf8mb4',
})

// CONNECTS DB
db.connect(err => {
  if (err) {
    error(err.message)
  }
})

module.exports = db
