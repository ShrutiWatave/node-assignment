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

    // const insesrtion = newUser.save()
    // console.log(insesrtion)

    const insertion = newUser.save()
        .then(() => {
            const {} = insertion
            console.log("data", insertion)
            res.json(res.body)
        })
        .catch(err => res.json("Error: " + err))
})

module.exports = router;