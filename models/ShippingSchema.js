const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shippingSchema = new Schema({
    address: {
        type: String
    },
    city: {
        type: String
    },
    pincode: {
        type: String
    },
    purchaseOrderId: {
        type: String
    },
    customerId: {
        type: String
    }
}, {timeStamps: true})

const shipping = mongoose.model('Shipping', shippingSchema)

module.exports = shipping