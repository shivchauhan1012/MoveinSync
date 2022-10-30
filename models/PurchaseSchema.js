const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
    productName: {
        type: String
    },
    quantity: {
        type: String
    },
    pricing: {
        type: String
    },
    mrp: {
        type: String
    },
    purchaseOrderId: {
        type: String
    },
    customerId: {
        type: String
    }
}, {timeStamps: true})

const purchase = mongoose.model('Purchase', purchaseSchema)

module.exports = purchase