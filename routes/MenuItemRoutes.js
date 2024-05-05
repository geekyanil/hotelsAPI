const express = require('express');
const MenuItem = require('../models/MenuItem');
const { createMenu, getMenu, getmenuBytaste } = require('../controllers/Menu');
const router = express.Router();

router.post('/', createMenu);

router.get('/', getMenu);

router.get('/:taste', getmenuBytaste);

module.exports = router;
