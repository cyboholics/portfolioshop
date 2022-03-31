const {userModel} = require("../models/index")
const axios = require("axios")
const HOST = process.env["HOST"]

module.exports = async function (context, req) {
    var token = req.query["token"]    
    try {
        const res=await axios.get(`${HOST}/api/GoogleAuthValidation?token=${token}`)
        const user = res.data
        var data = await userModel.findOrCreate({
            username: user
        })
        context.res = {
            body: data
        }
        context.statusCode = 200
    } catch (err) {
        context.statusCode = 500
        context.res = {
            body: err.message
        }
        context.log(err)
    }
    context.done()
}