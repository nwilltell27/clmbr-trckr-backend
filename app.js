var express = require('express');
var logger = require('morgan');
var cors = require('cors');

var facilitiesRouter = require('./routes/facilities');

var app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/facilities', facilitiesRouter);

module.exports = app; 
