const express = require('express');
const bodyParser = require('body-parser');
const foodRoutes = require('./error-handlers/models/routes/food.js')

const handleNotFound = require('./error-handlers/404.js');
const handleServerError = require('./error-handlers/500.js');

const app = express();

app.use(bodyParser.json());
app.use('/food', foodRoutes)

app.use(handleNotFound);  // 404 handler
app.use(handleServerError); // and 5000 handler

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('REST server is running!');
    });
  }
}
