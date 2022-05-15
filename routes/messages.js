const express = require('express');
const router = express.Router();
const messages = require('../lib/messages');
const auth = require("../middleware/authentication");
const User = require('../models/users');


// collections

// create a new message
router.post('/:sender',async function(req, res) {
    try{
        const sender = req.params.sender;
        const token = req.headers["x-access-token"];
        const check = await messages.Verify_username_with_token(token,sender);
        if (check){
            const {receiver, subject , text} = req.body;
            const ans = await messages.create(sender, Receiver,subject, text);
            res.send( ans );
        }
        else{
            res.send("you are not login");
        }
    }
    catch{
    res.send("you are not login");
    }
});

// return all messages of user
 router.get('/:name',auth,async function(req, res) {
    const token = req.headers["x-access-token"];
    const name = req.params.name;
    const check = await messages.Verify_username_with_token(token,name);
    if (check){
        messages = await messages.all_messages_for_user(req.params.name);
        res.send(messages);
    }
    else{
        res.send("you are not login");
    }
});

// return all unread messages of user
router.get('/:name/unread',auth,async function(req, res) {
    const token = req.headers["x-access-token"];
    const name = req.params.name;
    const check = await messages.Verify_username_with_token(token,name);
    if (check){
        messages = await messages.all_unread_messages_for_user(req.params.name);
        res.send(messages);
    }
    else{
        res.send("you are not login");
    }
});


router.put('/:name/:id',auth,async function(req, res) {
    const token = req.headers["x-access-token"];
    const name = req.params.name;
    try{
        const check = await messages.Verify_username_with_token(token,name);
        if (check){
        const {sender,subject,text} = await messages.readMessage(req.params.id);
        const user = await User.findOne({_id: sender});
        const message = {sender:user.name,subject,text}
        res.send(message);
        }
        else{
            res.send("you are not login");
        }
    }
    catch{
        res.sendStatus(500)
    }
});



// removes an message
router.delete('/:name/:id',auth,async function(req, res) {
    const token = req.headers["x-access-token"];
    const name = req.params.name;
    const check = await messages.Verify_username_with_token(token,name);
    if(check){
    const result = await messages.delete(req.params.id);
    res.send(result);
    }
    else{
        res.send("you are not login");
    }
});


module.exports = router;
