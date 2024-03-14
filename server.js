const express = require('express');
const path = require('path');

const api = require('./routes/index');

const PORT = 3001;

const app = express();

app.use(express.json());

//enables the use of the static files in the public folder 
app.use(express.static('public'));

// routing to the index.js file
app.use('/api', api);

// html route
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// html route
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`))