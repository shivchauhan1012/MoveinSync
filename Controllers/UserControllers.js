const Customer = require('../models/Data');
const Purchase = require('../models/PurchaseSchema');
const Shipping = require('../models/ShippingSchema');

const { v1: uuidv1,v4: uuidv4 } = require('uuid');


// Add customer and their details to the database
const addCustomer = (req, res, next) => {
    let user = new Customer({
        customerName: req.body.customerName,
        email: req.body.email,
        mobile: req.body.mobile,
        city: req.body.city,
        customerId: uuidv4()
    })
    user.save()
    .then(response => {
        res.json({
            message: 'User added successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    }) 
}

// Purchase Order and their details added to the database
const purchase = (req, res, next) => {
    let order = new Purchase({
        productName: req.body.productName,
        quantity: req.body.quantity,
        pricing: req.body.pricing,
        mrp: req.body.mrp,
        purchaseOrderId: uuidv4(),
        customerId: req.body.customerId
    })
    order.save()
    .then(response => {
        res.json({
            message: 'Order Purchased successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    }) 
}

// Shipping details added to the database
const shippingDetails = (req, res, next) => {
    let shipping = new Shipping({
        address: req.body.address,
        city: req.body.city,
        pincode: req.body.pincode,
        purchaseOrderId: req.body.purchaseOrderId,
        customerId: req.body.customerId
    })
    shipping.save()
    .then(response => {
        res.json({
            message: 'Shipping Details saved successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    }) 
}

// Get the Customer details by city
const getShippingDetailsByCity = (req, res, next) => {
    Customer.aggregate([
        { $match : { city : req.body.city } },
        { $project : { _id : 0, __v: 0 } }
    ])
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

//Get Customers with all Purchase Order
const customerPurchaseData = (req, res, next) => {
    Customer.aggregate([{ 
        $lookup:
        {
           from: "Purchase",
           localField: "customerId",
           foreignField: "customerId",
           as: "purchaseOrder"
        }
    },
    {
        $project : { _id : 0, __v: 0 }
    }
    ])
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    });
}

module.exports = { addCustomer, purchase, shippingDetails, getShippingDetailsByCity, customerPurchaseData }
