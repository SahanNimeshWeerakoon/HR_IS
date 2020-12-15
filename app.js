const express = require('express');
const cors = require('cors');
const path = require ('path');
const test = require('./routes/test');
const client = require('./routes/client');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = new express();

//database
mongoose.connect(config.database, {  useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err));

const employee = require('./routes/Employee');
// Set up cors middleware
app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));
// set up route
app.use('/test', test);
app.use('/employee', employee);
app.use('/client', client);

//passport middleware





//port number
const port = 5000;

app.get('/', (req, res) =>{
    res.send('Invalid Endpoint');
});

app.listen(port, () => console.log(`Server is listening to port ${port}`));