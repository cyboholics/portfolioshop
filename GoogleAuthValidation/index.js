const CLIENT_ID = process.env["GOOGLE_AUTH_CLIENT_ID"]
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);
module.exports = async function (context, req) {
    const token = req.query.token;
    try{
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID
        });
        const payload = ticket.getPayload();
        context.res.body = payload.email;
        context.res.status = 200;
    }catch(err){
        context.res.status = 401;
        context.res.body = err.message;
    }
    context.done();
}