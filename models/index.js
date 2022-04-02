const userModel = require('./userModel')
const userRequestModel = require('./userRequestModel')
const adminAuthModel = require('./adminAuthModel')
const mongoose = require('mongoose')
const mongoLink = process.env["MONGO_LINK"]

mongoose.connect(mongoLink, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, result) => {
    if(err) console.log(err.message)
    if(!err && result) console.log("Mongoose Connected Successfully")
})

module.exports = { userModel, userRequestModel, adminAuthModel }