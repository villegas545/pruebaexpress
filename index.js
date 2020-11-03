const express = require('express');
const app = express();

app.use(express.json());
app.use('/', require('./routes/'));

app.listen(8000, () => {
    console.log(`Servidor ejecutandose en http://localhost:8000`)
})
module.exports = app;