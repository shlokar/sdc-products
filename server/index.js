const express = require('express');
const models = require('./models/models.js');

const app = express();
const port = 3000;

app.listen(port, () => {
  // models.queryTest()
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  console.log('listening on port:', port);
});
