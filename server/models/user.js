const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: String,
    email: String,
    password: String,
    client: {
        type: Boolean
    },
    seller: {
        type: Boolean
    },
    role: {
        type: Number,
        default: 0
    },
    cars: [{
        type: Schema.Types.ObjectId,
        ref: 'car'
    }]
});



const User = mongoose.model('user', userSchema);

module.exports = User;