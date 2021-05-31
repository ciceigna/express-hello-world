const express = require('express');

const port = process.ENV.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(port);