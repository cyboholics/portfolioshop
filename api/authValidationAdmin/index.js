const { adminAuthModel } = require("../models/index")
const CLIENT_ID = process.env["REACT_APP_GOOGLE_AUTH_CLIENT_ID"]
const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client(CLIENT_ID)

module.exports = async function (context, req) {
    const token = req.query["token"]
    try{
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID
        })
        const payload = ticket.getPayload()
        const adminname = payload.email
        let allAdmins
        try{
            allAdmins = await adminAuthModel.find({})
        }catch(err){
            context.res = {
                statusCode: 500,
                body: err.message
            }
            context.done()
        }
        allAdmins.map((admin)=>{
            if(admin.email == adminname){
                context.res = {
                    statusCode: 200,
                    body: admin.email
                }
                context.done()
            }
        })
        context.res = {
            statusCode: 403,
            body: "Access Forbidden"
        }
        context.done()
    }catch(err){
        context.res = {
            statusCode: 401,
            body: err.message
        }
    }
    context.done()
}