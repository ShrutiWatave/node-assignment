
const router = require('express').Router();

const { Snowflake } = require('@theinternetfolks/snowflake');
let Role = require('../models/role.model');

router.route('/').get((req, res) => {
    Role.find()    
        .then(roles => res.json(roles))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
    const name = req.body.name
    const newRole = new Role({
        _id: Snowflake.generate(),
        name
    });

    newRole.save()
        .then(role => res.json(role))
        .catch(err => res.json("Error: " + err))
});

module.exports = router;