const { userRequestModel } = require("../models/index")
const axios = require("axios")
const HOST = process.env["HOST"]

module.exports = async function (context, req) {
    const admin_token = req.query["admin_token"]
    const user_token = req.query["token"]
    const id = req.body["id"]
    const responseMsg = req.body["responseMessage"]
    let currStatus = req.body["status"]
    let usernm
    if (!currStatus) currStatus = "Open"
    let responseBy
    if (!responseMsg || !id || (!user_token && !admin_token)) {
        context.res = {
            statusCode: 400,
            body: "Bad Request"
        }
        context.done()
    }
    let res
    try {
        if (admin_token) {
            res = await axios.get(`${HOST}/api/authValidationAdmin?token=${admin_token}`)
            responseBy = `Admin <` + `${res.data}>`
            try {
                await userRequestModel.updateOne(
                    {
                        _id: id,
                    },
                    {
                        status: currStatus,
                        $push: {
                            thread: {
                                message: responseMsg,
                                by: responseBy,
                                timestamp: Date.now()
                            }
                        }
                    }
                )
                context.res = {
                    statusCode: 200,
                    body: `Update Successful. Request ID ${id}`,
                }
                context.done()
            } catch (err) {
                context.res = {
                    status: 500,
                    body: err.message
                }
                context.done()
            }
        }

        if (user_token) {
            res = await axios.get(`${HOST}/api/googleAuthValidation?token=${user_token}`)
            responseBy = res.data
            usernm = res.data
            try {
                await userRequestModel.updateOne(
                    {
                        _id: id,
                        username: usernm
                    },
                    {
                        status: currStatus,
                        $push: {
                            thread: {
                                message: responseMsg,
                                by: responseBy,
                                timestamp: Date.now()
                            }
                        }
                    }
                )
                context.res = {
                    statusCode: 200,
                    body: `Update Successful. Request ID ${id}`,
                }
                context.done()
            } catch (err) {
                context.res = {
                    status: 500,
                    body: err.message
                }
                context.done()
            }
        }
    } catch (err) {
        let errCode
        if(admin_token) errCode = err.toJSON().status
        if(user_token) errCode = 401
        context.res = {
            statusCode: errCode,
            body: err.message
        }
        context.done()
    }
}