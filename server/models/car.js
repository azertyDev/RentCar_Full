const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema ({
    model: String,
    cost: String,
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    client: [{
        type: Schema.Types.ObjectId,
        ref: 'client'
    }]
});

const Car = mongoose.model('car', carSchema);

module.exports = Car;