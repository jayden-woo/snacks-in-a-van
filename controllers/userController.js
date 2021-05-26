const mongoose = require("mongoose")

// import the models used
const Customer = mongoose.model("Customer")
const Vendor = mongoose.model("Vendor")

// get the customer login page
const getCustomerLogIn = (req, res) => {
    return res.status(200).send('<h1> Customer Log In Page <\h1>')
}

// get the vendor login page
const getVendorLogIn = (req, res) => {
    return res.status(200).send('<h1> Vendor Log In Page <\h1>')
}

// get the customer signup page
const getCustomerSignUp = (req, res) => {
    return res.status(200).send('<h1> Customer Sign Up Page <\h1>')
}

// get the vendor signup page
const getVendorSignUp = (req, res) => {
    return res.status(200).send('<h1> Vendor Sign Up Page <\h1>')
}

// get the customer or vendor account details
const getAccount = (req, res) => {
    try {
        return res.status(200).send(req.user)
    // error occured during query
    } catch (err) {
        return res.status(400).send("Oops! Something went wrong.")
    }
}

// log out a user
const logOut = (req, res) => {
    req.logout()
    req.flash("You have successfully logged out.")
    console.log("Logged out")
    return res.status(200).redirect(`/${req.originalUrl.split('/')[1]}/login`)
}

// update the account details of a customer
const customerUpdate = async (req, res) => {
    // check if email is supplied
    if (req.body.email) {
        // check if email is taken
        if (await Customer.findOne( {email: req.body.email} )) {
            req.flash("updateMessage", "The email address you have entered is already taken.")
            return res.status(409).send("Please enter another email address.")
        }
        // update email
        req.user.email = req.body.email
    }

    // check if old password is supplied
    if (req.body.oldPassword) {
        // check if old password matches
        if (!req.user.validPassword(req.body.oldPassword)) {
            console.log("Wrong old password")
            return res.status(401).send("The old password you have entered is incorrect.")
        }
        // update password
        req.user.password = req.user.generateHash(req.body.password)
    }

    // update first name and last name if supplied
    if (req.body.firstName) req.user.firstName = req.body.firstName
    if (req.body.lastName) req.user.lastName = req.body.lastName

    // save the user details
    req.user.save( (err) => {
        if (err) throw err
    })

    return res.status(200).send("Customer details updated successfully.")
}

// update the account details of a vendor
const vendorUpdate = async (req, res) => {
    // TODO: Implement vendor account update
}

// export the controller functions
module.exports = {
    getCustomerLogIn, 
    getVendorLogIn, 
    getCustomerSignUp, 
    getVendorSignUp, 
    getAccount, 
    logOut, 
    customerUpdate, 
    vendorUpdate
}