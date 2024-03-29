const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/userRoutes/UserRoute');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', userRoute);

module.exports = app;