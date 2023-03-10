// DEPENDENCIES (Or Plugins--------***** section in Anatomy of an Express Server

const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// Environment variables
dotenv.config();

// Importing Route files
const calcroute = require('./routes/calcroute');

// INSTANTIATIONS----------------****** section in Anatomy of an Express Server
const app = express();

// CONFIGURATIONS-------------------**** section in Anatomy of an Express Server
app.engine('pug', require('pug').__express);

app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES---------------------------**** section in Anatomy of an Express Server
app.use('/', calcroute);

app.get('*', (req, res) => {
  res.send("404! Sorry the page you're looking for does not exists.");
});

// BOOTSTRAPPING SERVER--------------***section in Anatomy of an Express Server
let PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Elders are listening on port ${PORT}`));
