const { newsletterModel } = require("../models/index")

module.exports = async function (context, req) {
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
    const email = req.query["email"]
    if(!validateEmail(email)){
        context.res = {
            statusCode: 400,
            body: "Enter a valid email"
        }
        context.done()
    }
    if (!email) {
        context.res = {
            statusCode: 400,
            body: "Bad Request"
        }
        context.done()
    }
    try {
        let msg
        const user = await newsletterModel.find({
            email: email
        })
        if (user.length == 0) {
            await newsletterModel.create({
                email: email
            })
            msg = email
        } else {
            msg = "Already Subscribed"
        }
        context.res = {
            statusCode: 200,
            body: msg
        }
    } catch (err) {
        context.res = {
            statusCode: 500,
            body: err.message
        }
    }
}