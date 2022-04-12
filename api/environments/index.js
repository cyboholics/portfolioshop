module.exports = async function (context, req) {
    context.res = {
        body: {
            "GOOGLE_CLIENT_ID": process.env["REACT_APP_GOOGLE_AUTH_CLIENT_ID"]
        }
    };
    context.done()
}