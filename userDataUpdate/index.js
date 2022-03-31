const {userModel} = require("../models/index")
const axios = require("axios")
const HOST = process.env["HOST"]

module.exports = async function (context, req) {
    const data = req.body
    var token = req.query["token"]
    try {
        const res=await axios.get(`${HOST}/api/GoogleAuthValidation?token=${token}`)
        const user = res.data
        await userModel.updateOne({
            username: user
        }, {
            templateData: data
        })
        context.res = {
            statusCode:200,
            body: data
        }
    }catch(err){
        context.res = {
            statusCode:500,
            body: err.message
        }
        context.log(err)
    }
}