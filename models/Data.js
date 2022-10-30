const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    customerName: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    },
    customerId: {
        type: String
    }
}, {timeStamps: true})

const customerSchema = mongoose.model('User', userSchema)

module.exports = customerSchema