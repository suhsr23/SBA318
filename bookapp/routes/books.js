const express = require('express');
const _ = require('lodash');
const { books } = require('../data/data');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(books);
});

router.post('/', (req, res) => {
    const { title, author, genre } = req.body;
    const id = books.length ? _.maxBy(books, 'id').id + 1 : 1;
    const newBook = { id, title, author, genre };
    books.push(newBook);
    res.status(201).json(newBook);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const book = _.find(books, { id: parseInt(id) });
    if (book) {
        _.assign(book, req.body);
        res.json(book);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.remove(books, { id: parseInt(id) });
    res.status(204).end();
});

module.exports = router;
