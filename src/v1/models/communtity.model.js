const mongoose = require('mongoose');
const User = require('./user.model')

const Schema = mongoose.Schema;

const communitySchema = new Schema({
    _id: String,
    name: {
        type: String,
        maxlength: 128,
    },
    slug: {
        type: String,
        maxlength: 255,
    },
    owner: [{
        type: String,
        ref: 'User'
        }]
});

const Community = mongoose.model('Community', communitySchema);

module.exports = Community;