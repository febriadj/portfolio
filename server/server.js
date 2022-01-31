require('dotenv').config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const mongodb = require('./database/connect');
const routes = require('./routes');

const app = express();
// enable all cors
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// connect to mongodb driver
mongodb();

app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;
