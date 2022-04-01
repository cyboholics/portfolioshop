const { userRequestModel } = require("../models/index")
const axios = require("axios")
const HOST = process.env["HOST"]

module.exports = async function (context, req) {
    const token = req.query["token"]
    const id = req.body["id"];
    const responseTime = Date.now();
    const responseMsg = req.body["responseMessage"];
    if (!responseMsg || !id || !token) {
        context.res = {
            statusCode: 400,
            body: "Bad Request"
        };
        context.done()
        return
    }
    let res
    try {
        res = await axios.get(`${HOST}/api/authValidationAdmin?token=${token}`)
    } catch (err) {
        context.res = {
            statusCode: err.toJSON().status,
            body: err.message
        }
        context.done()
    }

    try {
        await userRequestModel.updateOne(
            {
                _id: id,
            },
            {
                responseTimestamp: responseTime,
                responseMessage: responseMsg,
                responseBy: res.body
            }
        );
        context.res = {
            statusCode: 200,
            body: `Update Successful. Request ID ${id}`,
        }
    } catch (err) {
        context.res = {
            status: 500,
            body: err.message
        }
    }
    context.done();
};