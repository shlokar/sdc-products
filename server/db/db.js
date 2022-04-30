const { Pool } = require('pg');

const pool = new Pool({
  user: 'test_user',
  host: '18.144.62.20',
  database: 'products',
  port: 5432
});

pool.connect((err, res) => {
  if (err) {
    console.log(err);
  }
});

module.exports = pool;
