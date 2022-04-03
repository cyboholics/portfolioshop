const mongoose = require('mongoose')

const userReqSchema = mongoose.Schema({
    _id: false,
    email:{
        type: String,
        unique: true,
        required: true
    }
})

module.exports = mongoose.model('NewsletterEmail', userReqSchema)