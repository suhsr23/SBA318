const express = require('express');
const _ = require('lodash');
const { genres } = require('../data/data');
const router = express.Router();


router.get('/', (req, res) => {
    res.json(genres);
});

module.exports = router;
