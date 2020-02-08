const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regSchema = new Schema ({
    name: String,    
    email: {
        type: String,
        lowercase: true,
    },
    password: String,
    role: {
        type: Number,
        default: 0
    }
});

const Reg = mongoose.model('auth', regSchema);

module.exports = Reg;