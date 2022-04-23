// require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'shlokareddy',
  host: 'localhost',
  database: 'products',
  // password: process.env.PASSWORD,
  port: 5432
});

pool.connect((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected');
  }
});

module.exports = pool;
