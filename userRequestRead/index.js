const { userRequestModel } = require("../models/index")

const axios = require("axios")
const HOST = process.env["HOST"]

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
                statusCode: 401,
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
        const requests = await userRequestModel.find(filter)
        context.res = {
            statusCode: 200,
            body: {
                requests: requests
            }
        }
    }catch(err){
        context.res = {
            statusCode: 500,
            body: err.message
        }
    }
    context.done()
}