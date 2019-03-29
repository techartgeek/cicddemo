const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("<h2 style=\"text-align:center;\">Hello World!</h2>"));

app.get('*', (req, res) => res.redirect('/'));

app.listen(3000, (err) => console.log('app running on port 3000'));
