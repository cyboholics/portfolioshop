const userData = require("../models/schema")
const mongoose = require("mongoose")
const axios = require("axios")
const mongoLink = process.env["MONGO_LINK"]
const HOST = process.env["HOST"]

mongoose.connect(mongoLink, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log(err)
})
module.exports = async function (context, req) {
    var token = req.query["token"]    
    try {
        const res=await axios.get(`${HOST}/api/GoogleAuthValidation?token=${token}`)
        const user = res.data
        var data = await userData.findOrCreate({
            username: user
        })
        context.res = {
            body: data
        };
        context.statusCode = 200;
    } catch (err) {
        context.statusCode = 500;
        context.res = {
            body: err.message
        };
        context.log(err)
    }
    context.done();
}