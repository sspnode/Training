const mongoose = require('mongoose');
const express = require('express');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const home = require('./routes/home');

const app = express();

//Mongo DB connection
(async () => {
    try {
        await mongoose.connect('mongodb://localhost/vidley');
        console.log('mongo db connected');
    }
    catch (ex) {
        console.error(ex.message);
    }
})();

app.use(express.json());
app.use('/', home);
app.use('/api/genres', genres);
app.use('/api/customers', customers);


app.listen('2000', () => console.log("Listening on port 2000"));