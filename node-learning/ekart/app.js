const express = require('express');
const { AppRoutes } = require('./routes');
const app = express();

AppRoutes(app);

app.listen("3000");