const express = require('express');
const path = require('path');

const api = require('./routes/index');

const PORT = 3001;

const app = express();

app.use(express.json());

app.use(epxress.static('public'));

app.use('/api', api);


app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`))