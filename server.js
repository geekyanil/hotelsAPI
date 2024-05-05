const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to our hotel');
});

// routing Person
const personRoutes = require('./routes/PersonRoutes');
app.use('/person', personRoutes);

// routing menuItems
const menuRoutes = require('./routes/MenuItemRoutes');
app.use('/menu', menuRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at:${PORT}`);
});
