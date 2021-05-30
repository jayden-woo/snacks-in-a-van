const express = require('express')
const passport = require('passport')

// add the customer router 
const customerRouter = express.Router()

// add the user and customer controller
const userController = require('../controllers/userController.js')
const customerController = require('../controllers/customerController.js')

// add the required middlewares
const isCustomer = require('../middleware/isCustomer')
const isLoggedOut = require('../middleware/isLoggedOut')
const withinTimeLimit = require('../middleware/withinTimeLimit')

/* ----- GET routes ----- */

// handle the GET request to get the front page
customerRouter.get('/', customerController.getFrontPage)

// handle the GET request to get the closest vendors
customerRouter.get('/map', customerController.getVendorsList)

// handle the GET request for the login page
customerRouter.get('/login', isLoggedOut, userController.getCustomerLogIn)

// handle the get request to log out
customerRouter.get('/logout', isCustomer, userController.logOut)

// handle the GET request for the signup page
customerRouter.get('/signup', isLoggedOut, userController.getCustomerSignUp)

// handle the GET request for the account details page
customerRouter.get('/account', isCustomer, userController.getCustomerAccount)

// handle the GET request to get the menu
customerRouter.get('/menu', customerController.getMenu)

// handle the GET request to get details of one snack
customerRouter.get('/menu/:snackName', customerController.getSnackByName)

// handle the GET request to get the current cart
customerRouter.get('/cart', isCustomer, customerController.getCart)

// handle the GET request to get all the order details
customerRouter.get('/order', isCustomer, customerController.getOrders)

// handle the GET request to get details of one order
customerRouter.get('/order/:orderNumber', isCustomer, customerController.getOrderByNumber)

// handle the GET request to get the feedback page
customerRouter.get('/feedback', isCustomer, customerController.getFeedback)

/* ----- POST routes ----- */

// handle the POST request to store the current location
customerRouter.post('/', customerController.saveLocation)

// handle the POST request to select a vendor
customerRouter.post('/map', customerController.selectVendor)

// handle the POST request to log in
customerRouter.post('/login', isLoggedOut, passport.authenticate('customer-login'))

// handle the POST request to sign up
customerRouter.post('/signup', isLoggedOut, passport.authenticate('customer-signup'))

// handle the POST request to change the account details
customerRouter.post('/account', isCustomer, userController.customerUpdate)

// handle the POST request to confirm the current order selections
customerRouter.post('/menu/order', isCustomer, customerController.confirmOrder)

/* ----- PUT routes ----- */

// handle the PUT request to update an order
customerRouter.put('/order/update', isCustomer, withinTimeLimit, customerController.updateOrder)

// handle the PUT request to cancel an order
customerRouter.put('/order/cancel', isCustomer, withinTimeLimit, customerController.cancelOrder)

// handle the PUT request to submit a feedback for the order
customerRouter.put('/feedback', isCustomer, customerController.submitFeedback)

// export the router
module.exports = customerRouter
