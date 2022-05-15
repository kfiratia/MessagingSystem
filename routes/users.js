const express = require('express');
const User = require('../models/users');
const router = express.Router();



// return the name and id that all users
router.get('/',async function(req, res) {
    let allUsers = await User.find({});
    allUsers = allUsers.map((x)=>{
        return {"id":x._id , "name":x.name};
    })
    res.send(allUsers);
});



module.exports = router;