const mongoose = require('mongoose')

const newsletterModel = mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true
    }
})

module.exports = mongoose.model('NewsletterEmail', newsletterModel)