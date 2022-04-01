const mongoose = require('mongoose')

const userReqSchema = mongoose.Schema({
    email:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('AdminEmail', userReqSchema)