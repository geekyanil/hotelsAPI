const MenuItem = require('../models/MenuItem');

const createMenu = async (req, res, next) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log('Data Saved');
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

const getMenu = async (req, res, next) => {
  try {
    const data = await MenuItem.find();
    console.log('Data Fetched');
    res.status(400).json(data);
  } catch (error) {
    res.status(400).json({
      error: 'Internal Server Error',
    });
  }
};

const getmenuBytaste = async (req, res, next) => {
  try {
    const taste = req.params.taste;
    if (taste == 'sweet' || taste == 'sour' || taste == 'spices') {
      const response = await MenuItem.find({ taste: taste });
      console.log('response Fetched');
      res.status(200).json(response);
    } else {
      console.log('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createMenu, getMenu, getmenuBytaste };
