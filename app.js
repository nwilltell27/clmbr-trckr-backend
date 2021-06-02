var express = require('express');
var logger = require('morgan');

var facilitiesRouter = require('./routes/facilities');

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/api/facilities', facilitiesRouter);

module.exports = app; 
