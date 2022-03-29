const userData = require("../models/schema")
const mongoose = require("mongoose")
const mongoLink = process.env["MONGO_LINK"]
mongoose.connect(mongoLink, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, result) => {
    if(err) console.log(err)
})

module.exports = async function (context, req) {
    const user = req.body.doc.username;
    const data = req.body.doc;
    try {
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
            body: {
                message: "Internal Server Error",
                error: err.message
            }
        };
        context.log(err)
    }
}