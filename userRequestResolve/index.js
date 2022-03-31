const userRequest = require("../models/user_request_schema");
const mongoose = require("mongoose");
const mongoLink = process.env["MONGO_LINK"];
const axios = require("axios");
const HOST = process.env["HOST"];

mongoose.connect(
    mongoLink,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, result) => {
        if (err) console.log(err);
    }
);

module.exports = async function (context, req) {
    const id = req.body.id;
    const responseTime = Date.now();
    const responseMsg = req.body.responseMessage;
    if(!responseMsg || !id){
        context.res = {
            statusCode: 402,
            body: {
                message: "Bad Request",
                err: null,
            },
        };
        context.done()
    }
    try {
        await userRequest.updateOne(
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
            body: {
                message: "Updated",
                err: null,
            },
        };
    } catch (err) {
        context.res = {
            statusCode: 400,
            body: {
                message: "Database Error",
                err: err.message,
            },
        };
    }
    context.done();
};
