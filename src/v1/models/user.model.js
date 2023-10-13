const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: String,
    name: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 64,
        default: null
    },
    email: {
        type: String,
        unique: true,
        maxlength: 128,
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 64,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;