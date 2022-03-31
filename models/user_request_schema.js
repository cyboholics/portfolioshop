const mongoose = require('mongoose')
const findOrCreate = require("mongoose-findorcreate")

const userReqSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    userRequest:{
        type: String,
        required: true
    },
    raisedTimestamp:{
        type: Date,
        required: true
    },
    responseTimestamp:{
        type: Date,
    },
    responseMessage:{
        type: String,
    }
})

userReqSchema.plugin(findOrCreate)

module.exports = mongoose.model('UserRequest', userReqSchema)