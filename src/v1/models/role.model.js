const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roleSchema = new Schema({
    _id: String,
    name: {
        type: String,
        maxlength: 64,
        unqiue: true
    },
    
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;