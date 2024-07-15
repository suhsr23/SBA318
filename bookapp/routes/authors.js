const express = require('express');
const _ = require('lodash');
const { authors } = require('../data/data');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(authors);
});

module.exports = router;
