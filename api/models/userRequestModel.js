const mongoose = require('mongoose')

const userReqSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    status: {
        type: String,
    },
    thread:[{
        message:{
            type: String,
            required: true
        },
        by:{
            type: String,
        },
        timestamp: {
            type: Date,
            required: true
        }
    }]
})

module.exports = mongoose.model('UserRequest', userReqSchema)