const { Pool } = require('pg');

const pool = new Pool({
  user: 'shlokareddy',
  host: 'localhost',
  database: 'products',
  port: 5432
});

pool.connect((err, res) => {
  if (err) {
    console.log(err);
  }
});

module.exports = pool;
