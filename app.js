const express = require('express');
const cors = require('cors');
const test = require('./routes/test');

const app = new express();

// Set up cors middleware
app.use(cors());

// set up route
app.use('/test', test);

const port = 5000;

app.listen(port, () => console.log(`Server is listening to port ${port}`));