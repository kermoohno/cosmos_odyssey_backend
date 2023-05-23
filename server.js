const express = require('express');
const app = express();
const PORT = process.env.PORT || 5010;

app.listen(PORT, () => {
    console.log(`Server started on port ${5010}`);
});

app.get('/', (req, res) => {
    res.send('Hello, Cosmos Odyssey!');
});

