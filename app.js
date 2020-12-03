const express = require('express');
const cors = require('cors');
const path = require ('path');
const bodyParser = require('body-parser');
const test = require('./routes/test');
const client = require('./routes/client');
const mongoose = require('mongoose');
const config = require('./config/database');


mongoose.connect(config.database).then (
    () => {connsole.log('connected'+config.database);
});


mongoose.connection.on('conntected', () =>{
    console.log('Connected to database '+config.database);
});  

//on error 
mongoose.connection.on('error', (err) => {
    console.log('Database error:'+err);
});


const app = new express();

 
// Set up cors middleware
app.use(cors());

//body parser middleware
app.use(bodyParser.json());

//set up static folder
app.use(express.static(path.join(__dirname,'public')));

// set up route
app.use('/test', test);
app.use('/client', client);

const port = 5000;

app.get('/', (req, res) => {
    res.send('INVALID ENDPOINT');

});

app.listen(port, () => console.log(`Server is listening to port ${port}`));