//Modifications to the db

const router = require('express').Router();

const { Snowflake } = require('@theinternetfolks/snowflake');
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()    
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/signup').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User({
        _id: Snowflake.generate(),
        name, 
        email, 
        password
    });

    newUser.save()
        .then(newuser => res.json(newuser))
        .catch(err => res.json("Error: " + err))
})

router.route('/signin').post((req, res) => {
    const user = User.find({email: req.body.email, password: req.body.password})
        .then(user => res.json(user))
        .catch(err => res.json("Error: " + err))
})

module.exports = router;