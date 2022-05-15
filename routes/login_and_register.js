const express = require('express');
const messages = require('../lib/messages');
const User = require('../models/users');
const router = express.Router();

//login and creating a token
router.post('/login',async function(req, res) {
    const {name,password} = req.body;
    const user = await User.findOne({ name });
    const check = await user.checkPassword(password)
    if(user && check){
        Token = messages.createToken(user._id);
        await User.findByIdAndUpdate(
            {_id:user._id},
            {token: Token}) ;
            res.status(200).send({Token});
            return
    }
    res.status(404).send("make sure your user name and password are correct, and then try again");
});

// create a new user
router.post('/register',async function(req, res) {
    const {name,password} = req.body;
    try{
        const user = new User({ name: name, password: password});
        await user.save();
        res.send(user);
        }
        catch{
           const err = 'You are missing parameters or your user name is used by another registered user';
           res.send(err);
        }
});

module.exports = router;