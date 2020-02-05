const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema ({
    model: String,
    cost: String,
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
})

const Car = mongoose.model('car', carSchema);

module.exports = Car;