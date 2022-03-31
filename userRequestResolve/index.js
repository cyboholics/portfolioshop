const userRequest = require("../models/user_request_schema")
const mongoose = require("mongoose")
const mongoLink = process.env["MONGO_LINK"]
const axios = require("axios")
const HOST = process.env["HOST"]

mongoose.connect(mongoLink, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, result)=>{
    if(err) console.log(err);
})

module.exports = async function (context, req) {
    try{
        
        const usernm = req.body.username;
        const id = req.body.id;
        const responseTime = Date.now()
        const responseMsg = req.body.responseMessage;
        const user = userRequest.find({username: usernm})
        await userRequest.updateOne({
            _id:id
        },{
            responseTimestamp: responseTime,
            responseMessage: responseMsg
        });
        context.res = {
            statusCode: 200,
            body: {
                message: "Updated",
                err: null
            }
        };
    }catch(err){
        context.res = {
            status: 500,
            body: {
                message: "Internal Server Error",
                err: err.message
            }
        };
        context.log(err)
    }
}