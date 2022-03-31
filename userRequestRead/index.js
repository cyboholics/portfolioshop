const userRequest = require("../models/user_request_schema")
const mongoose = require("mongoose")
const mongoLink = process.env["MONGO_LINK"]
const axios = require("axios")
const HOST = process.env["HOST"]

mongoose.connect(
    mongoLink,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, result) => {
        if (err) console.log(err)
    }
)

module.exports = async function (context, req) {
    const admin = req.query["admin"]
    let filter;
    if (admin) {
        context.log(admin)
        filter = {}
    } else {
        const token = req.query["token"]
        let res
        try {
            res = await axios.get(`${HOST}/api/GoogleAuthValidation?token=${token}`)
        } catch (err) {
            context.res = {
                statusCode: 402,
                body: {
                    message: "Unauthorized Access",
                    err: err.message,
                },
            }
            context.done()
        }
        const username = res.data
        filter = { username: username }
    }
    try {
        const requests = await userRequest.find(filter)
        context.res = {
            statusCode: 200,
            body: {
                requests: requests
            }
        }
    }catch(err){
        context.res = {
            statusCode: 500,
            body:{
                message: "Internal Server Error",
                err: err.message
            }
        }
    }
    context.done()
}