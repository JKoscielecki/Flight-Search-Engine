const express = require('express');
const app = express();
const flightsRouter = require('./routes/flights');

app.use('/flights', flightsRouter);

app.listen(5000, () => console.log('Server started on port 5000'));
