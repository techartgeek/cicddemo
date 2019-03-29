const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("Hello World Peace!"));

app.get('*', (req, res) => res.redirect('/'));

app.listen(3000, (err) => console.log('app running on port 3000'));
