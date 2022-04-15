module.exports = async function (context, req) {
    const REACT_APP_GOOGLE_AUTH_CLIENT_ID = process.env["REACT_APP_GOOGLE_AUTH_CLIENT_ID"]
    if (!REACT_APP_GOOGLE_AUTH_CLIENT_ID) {
        context.res = {
            statusCode: 500,
            body: "Environment Not Found"
        }
        context.done()
    } else {
        context.res = {
            statusCode: 200,
            body: {
                "GOOGLE_CLIENT_ID": process.env["REACT_APP_GOOGLE_AUTH_CLIENT_ID"]
            }
        }
        context.done()
    }
}