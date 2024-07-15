const express = require('express');
const bodyParser = require('body-parser');
const requestLogger = require('./middlewares/requestLogger');
const errorHandler = require('./middlewares/errorHandler');
const bookRoutes = require('./routes/books');
const authorRoutes = require('./routes/authors');
const genreRoutes = require('./routes/genres');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(requestLogger);

app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/genres', genreRoutes);

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    const { books } = require('./data/data');
    res.render('index', { books });
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
