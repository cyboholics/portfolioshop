const { userModel } = require("../models/index")
const axios = require("axios")
const HOST = process.env["HOST"]

module.exports = async function (context, req) {
    const data = req.body
    var token = req.headers["token"]
    var res
    try {
        res = await axios.get(`${HOST}/api/GoogleAuthValidation`,{
            headers: {
                token: token
            }
        })
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
        await userModel.updateOne({
            username: user
        }, {
            templateData: data
        })
        context.res = {
            statusCode: 200,
            headers: {
                "Content-Type": 'application/json'
            },
            body:{
                message: "Update Successful",
                err: null
            }
        }
    } catch (err) {
        context.res = {
            statusCode: 500,
            body: err.message
        }
    }
    context.done()
}