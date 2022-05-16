const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const messages = require('./routes/messages');
const users = require('./routes/users');
const login_and_register = require('./routes/login_and_register');
const app = express();


//Database connection
(async function connect(){
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB Connected!!!');

    }   catch (err) {
        console.log(err);
    }
})();


app.use(express.json());

//
app.use('/messages', messages);
app.use('/users', users);
app.use('',login_and_register);

//routing to the home page
app.get("/", (req, res) => {
    res.status(200).send("Welcome to abra chat project");
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server running on port ${port}...`);
})
