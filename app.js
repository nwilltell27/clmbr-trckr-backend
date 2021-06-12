require('dotenv').config();

var express = require('express');
var logger = require('morgan');
var cors = require('cors');

var climbsRouter = require('./routes/climbs');

var app = express();

require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/climbs', climbsRouter);

module.exports = app; 
