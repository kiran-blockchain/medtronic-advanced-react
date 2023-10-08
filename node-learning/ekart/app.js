const express = require('express');
const { AppRoutes } = require('./routes');
const { client, ConnectDatabase } = require('./dataaccess');
const app = express();
 ConnectDatabase();
AppRoutes(app);

app.listen("3000");