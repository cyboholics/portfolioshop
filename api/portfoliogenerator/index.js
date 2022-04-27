const ejs = require('ejs')
const path = require("path")
const fs = require("fs")
const { userModel } = require("../models/index")

async function streamToText(readable) {
    readable.setEncoding('utf8')
    let data = ''
    for await (const chunk of readable) {
        data += chunk
    }
    return data
}

module.exports = async function (context, req) {
    const template = "template1"
    const user = req.query["email"]
    var data;
    try {
        data = await userModel.findOrCreate({
            username: user
        })
        context.res = {
            statusCode: 200,
            headers: {
                "Content-Type": 'application/json'
            },
            body: data
        }
    } catch (err) {
        context.log(err)
        context.res = {
            statusCode: 500,
            body: err.message
        }
        context.done()
        return
    }
    if (!data || !template) {
        context.res = {
            statusCode: 400,
            body: "Bad Request"
        }
    }
    try {
        const templateFile = fs.readFileSync(path.join(__dirname,"../templates",template+'.ejs'), "utf8")
        const result = ejs.render(templateFile, data.doc.templateData)
        context.res = {
            statusCode: 200,
            body: result,
            headers: {
                'Content-Type': "text/html"
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