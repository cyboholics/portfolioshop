const { userRequestModel } = require("../models/index")
const axios = require("axios")
const HOST = process.env["HOST"]

module.exports = async function (context, req) {
    var token = req.query["token"]
    let res

    try {
        res = await axios.get(`${HOST}/api/googleAuthValidation?token=${token}`)
    } catch (err) {
        context.res = {
            statusCode: 401,
            body: `Unauthorized Access : ${err.message}`,
        }
        context.done()
    }
    const usernm = res.data
    const userReq = req.body["userRequest"]
    if (!userReq) {
        context.res = {
            statusCode: 400,
            body: "Bad Request, missing userRequest"
        }
        context.done()
    }

    try {
        const ticket = await userRequestModel.create({
            username: usernm,
            status: "Open",
            thread: [{
                message: userReq,
                by: usernm,
                timestamp: Date.now()
            }]
        })
        context.res = {
            statusCode: 200,
            body: `Created Ticket with Ticket Id : ${ticket._id}`,
            headers: {
                "Content-Type": 'application/json'
            }
        }
    } catch (err) {
        context.res = {
            statusCode: 500,
            body: err.message,
        }
    }
    context.done()
}