const express = require('express');
const cors = require('cors');
const test = require('./routes/test');

const mongoose=require('mongoose');
const passport = require('passport');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config/database');
const database = require('./config/database');



//database
mongoose.connect(config.database, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false 
})
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err));

    const employee = require('./routes/Employee');

const app = new express();



// Set up cors middleware
app.use(cors());

app.use(bodyParser.json());


// set up route
app.use('/test', test);
app.use('/', employee);


//passport middleware
app.use(passport.initialize());
app.use(passport.session());




//port number
const port = 5000;

app.get('/', (req, res) =>{
    res.send('Invalid Endpoint');
});

app.listen(port, () => console.log(`Server is listening to port ${port}`));