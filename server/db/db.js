const { Pool } = require('pg');

const pool = new Pool({
  user: 'test_user',
  host: '54.67.49.174',
  database: 'products',
  port: 5432
});

pool.connect((err, res) => {
  if (err) {
    console.log(err);
  }
});

module.exports = pool;
