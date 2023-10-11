const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
        minlength: 3,
        maxlength: 128,
    },
    password: {
        type: String,
        minlength: 3,
        maxlength: 64,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;