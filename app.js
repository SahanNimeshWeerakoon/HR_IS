const express = require('express');
const cors = require('cors');
const path = require ('path');
const mongoose = require('mongoose');

const test = require('./routes/test');
const client = require('./routes/client');
const config = require('./config/database');
const user = require('./routes/user');
const employee = require('./routes/Employee');

const app = new express();

//database
mongoose.connect(config.database, {  useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err));

// Set up cors middleware
app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));
// set up route
app.use('/test', test);
app.use('/employee', employee);
app.use('/client', client);
app.use('/user', user);

//passport middleware





//port number
const port = 5000;

app.get('/', (req, res) =>{
    res.send('Invalid Endpoint');
});

app.listen(port, () => console.log(`Server is listening to port ${port}`));