const userRequest = require("../models/user_request_schema")
const mongoose = require("mongoose")
const mongoLink = process.env["MONGO_LINK"]
mongoose.connect(mongoLink, {
    useNewUrlParser: true
}, (err, result)=>{
    if(err) console.log(err);
})

module.exports = async function (context, req) {
    const usernm = req.body.username;
    const userReq = req.body.userRequest;
    const timestp = req.body.timestamp;
    try{
        await userRequest.create({
            username: usernm,
            userRequest: userReq,
            timestamp: timestp
        },(err, result)=>{
            if(!err) console.log(err)
        });
        context.res = {
            statusCode: 200,
            body: {
                message: "Inserted",
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