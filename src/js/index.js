const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./database');

connection.connect();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', require('./controls'));

app.listen(8000, '0.0.0.0', () => {
  console.log(`Started server: http://localhost:8080`);
});