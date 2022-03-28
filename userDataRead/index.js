const userData = require("../models/schema")
const mongoose = require("mongoose")
const mongoLink = process.env["MONGO_LINK"]
mongoose.connect(mongoLink, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, result) => {
    console.log(err || result)
})
module.exports = async function (context, req) {
    var user = req.query["user"]
    try {
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
            body: "Internal Server Error"
        };
    }
    context.done();
}