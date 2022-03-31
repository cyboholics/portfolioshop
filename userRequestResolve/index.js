const { userRequestModel } = require("../models/index")
const axios = require("axios")
const HOST = process.env["HOST"]

module.exports = async function (context, req) {
    const id = req.body.id;
    const responseTime = Date.now();
    const responseMsg = req.body.responseMessage;
    if(!responseMsg || !id){
        context.res = {
            statusCode: 400,
            body: {
                err: "Wrong keys",
            },
        };
        context.done()
        return
    }
    try {
        await userRequestModel.updateOne(
            {
                _id: id,
            },
            {
                responseTimestamp: responseTime,
                responseMessage: responseMsg,
            }
        );
        context.res = {
            statusCode: 200,
            contentType: "application/json",
            body: {
                message: `Update Successful. Request ID ${id}`,
                err: null
            }
        }
    } catch (err) {
        context.res = {
            status: 500,
            contentType: "application/json",
            body: {
                err: err.message
            }
        }
        context.log(err)
    }
    context.done();
};
