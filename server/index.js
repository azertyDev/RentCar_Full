const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config/config').get(process.env.NODE_ENV);
const port = process.env.PORT || 3001;

// Connect to MongoDB server
mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, { 
        useNewUrlParser: true,  
        useUnifiedTopology: true, 
        useCreateIndex: true,})
        .then(() => {
            console.log('MongoDB connected!');
        })
        .catch(err => {
            console.log('Error to connect MongoDB serve: ', err);
        })



// Route files
const login = require('../server/routes/login');
const users = require('../server/routes/user');
const cars = require('../server/routes/car');

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// Routes
app.use('/login', login);
app.use('/users', users);
app.use('/cars', cars);



// Catch 404 errors and forward them to Error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handler function
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;

    // Respond to client
    res.status(status).json({
        error: {
            message: error.message
        }
    })

    // Respond to ourselves
    console.error(err);
});

app.listen(port, () => {
    console.log(`RentCar app listening on port ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.