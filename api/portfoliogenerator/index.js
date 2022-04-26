const AZURE_BLOB_CONNECTION_STRING = process.env["AZURE_BLOB_CONNECTION_STRING"]
const { BlobServiceClient } = require("@azure/storage-blob")
const ejs = require('ejs')
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
    context.log(data.doc.templateData)
    if (!data || !template) {
        context.res = {
            statusCode: 400,
            body: "Bad Request"
        }
    }
    try {
        const blobServiceClient = await BlobServiceClient.fromConnectionString(AZURE_BLOB_CONNECTION_STRING)
        const container = "templates"
        //gets cintainer
        const containerClient = await blobServiceClient.getContainerClient(container)
        //gets template file
        const blockBlobClient = containerClient.getBlockBlobClient(template + ".ejs")
        const downloadBlockBlobResponse = await blockBlobClient.download(0)
        const templateFile = await streamToText(downloadBlockBlobResponse.readableStreamBody)
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