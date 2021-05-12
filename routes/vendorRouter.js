const express = require('express')

// add the vendor router 
const vendorRouter = express.Router()

// add the checking middleware
const isLoggedIn = require('../middleware/isLoggedIn')

// add the vendor controller
const vendorController = require('../controllers/vendorController.js')

// handle the GET requests for all the vendors
vendorRouter.get('/', vendorController.getAllVendors)

// GET requests by userid to find one vendor 
vendorRouter.get('/:userID', vendorController.getVendorByUserID)

// handle the GET request for the outstanding orders of a vendor
// emmmmmmmmm
vendorRouter.get('/:vendorID/outstanding', vendorController.getOutstandingOrders)

// handle GET request to present the details of (outstanding) order
// this should be presented in the view of the vendor 
// does not matter if the order is outstanding or not
// this route requires vendorID as stipulated in models/order
vendorRouter.get('/:vendorID/:orderID', vendorController.getVendorOrderDetails)

// handle the POST request to add a new vendor
//vendorRouter.post('/', vendorController.addVendor)

// handle the POST request to update the status of a vendor
vendorRouter.post('/account', isLoggedIn, vendorController.updateVendor)

// handle the POST request to update the status of an order
// havent test
vendorRouter.post('/orders/:orderNum', isLoggedIn, vendorController.updateOrderStatus)

// export the router
module.exports = vendorRouter 
