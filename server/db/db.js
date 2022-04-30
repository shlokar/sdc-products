const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '18.144.62.20',
  database: 'products',
  port: 5432,
  password: 'password'
});

pool.connect((err, res) => {
  if (err) {
    console.log(err);
  }
});

module.exports = pool;
