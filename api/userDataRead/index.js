const { userModel } = require("../models/index")
const axios = require("axios")
const HOST = process.env["HOST"]

module.exports = async function (context, req) {
    var token = req.query["token"]
    var res
    try {
        res = await axios.get(`${HOST}/api/GoogleAuthValidation?token=${token}`)
    } catch (err) {
        context.res = {
            statusCode: 401,
            body: err.message
        }
        context.done()
        return
    }
    const user = res.data
    try {
        var data = await userModel.findOrCreate({
            username: user
        })
        context.res = {
            headers: {
                "Content-Type": 'application/json'
            },
            body: data
        }
        context.statusCode = 200
    } catch (err) {
        context.statusCode = 500
        context.res = {
            body: err.message
        }
    }
    context.done()
}