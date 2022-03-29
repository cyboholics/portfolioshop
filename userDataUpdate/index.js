const userData = require("../models/schema")
const mongoose = require("mongoose")
const mongoLink = process.env["MONGO_LINK"]
const axios = require("axios")
const HOST = process.env["HOST"]

mongoose.connect(mongoLink, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, result) => {
    if(err) console.log(err)
})

module.exports = async function (context, req) {
    const data = req.body.doc;
    var token = req.query["token"];
    try {
        const res=await axios.get(`${HOST}/api/GoogleAuthValidation?token=${token}`);
        const user = res.data;
        await userData.updateOne({
            username: user,
        }, data)
        context.res = {
            statusCode:200,
            body: data
        };
    }catch(err){
        context.res = {
            statusCode:500,
            body: err.message
        };
        context.log(err)
    }

}