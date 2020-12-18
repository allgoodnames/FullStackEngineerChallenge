const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const employeeRoute = require('./routes/employee.js');
const reviewRoute = require('./routes/review.js');
const feedbackRequestRoute = require('./routes/feedbackRequest.js');
const authenticateRoute = require('./routes/authenticate.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/employee', employeeRoute);
app.use('/review', reviewRoute);
app.use('/feedbackrequest', feedbackRequestRoute);
app.use('/authenticate', authenticateRoute);

mongoose.connect(
  process.env.CONNECTION_STRING,
  { useNewUrlParser: true },
  () => {
    console.log('Connected to MongoDB')
  });

app.listen(3000);
