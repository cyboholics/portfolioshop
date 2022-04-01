const mongoose = require('mongoose')

const userReqSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userRequest: {
        type: String,
        required: true
    },
    raisedTimestamp: {
        type: Date,
        required: true
    },
    responseTimestamp: {
        type: Date,
    },
    responseMessage: {
        type: String,
    }
})

module.exports = mongoose.model('UserRequest', userReqSchema)