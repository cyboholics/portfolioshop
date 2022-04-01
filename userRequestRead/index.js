const { userRequestModel } = require("../models/index")
const axios = require("axios")
const HOST = process.env["HOST"]

module.exports = async function (context, req) {
    const admin = req.query["admin"]
    const token = req.query["token"]
    let filter;
    if (admin == "true") {
        let res
        try {
            res = await axios.get(`${HOST}/api/authValidationAdmin?token=${token}`)
        } catch (err) {
            context.res = {
                statusCode: err.response.status,
                body: err.message
            }
            context.done()
        }
        filter = {}
    } else {
        let res
        try {
            res = await axios.get(`${HOST}/api/googleAuthValidation?token=${token}`)
        } catch (err) {
            context.res = {
                statusCode: 401,
                body: err.message
            }
            context.done()
        }
        const username = res.data
        filter = { username: username }
    }

    try {
        const requests = await userRequestModel.find(filter)
        context.res = {
            statusCode: 200,
            body: {
                requests: requests
            }
        }
    } catch (err) {
        context.res = {
            statusCode: 500,
            body: err.message
        }
    }
    context.done()
}