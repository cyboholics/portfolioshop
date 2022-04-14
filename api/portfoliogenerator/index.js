const AZURE_BLOB_CONNECTION_STRING = process.env["AZURE_BLOB_CONNECTION_STRING"]
const { BlobServiceClient } = require("@azure/storage-blob")
const ejs = require('ejs')

async function streamToText(readable) {
    readable.setEncoding('utf8')
    let data = ''
    for await (const chunk of readable) {
        data += chunk
    }
    return data
}

module.exports = async function (context, req) {
    const data = req.body["data"]
    const template = req.body["template"]
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
        const result = ejs.render(templateFile, data)
        context.res = {
            statusCode: 200,
            body: result,
            headers: {
                'Content-Type': "text/html"
            }
        }
        context.done()
        return
    } catch (err) {
        context.res = {
            statusCode: 500,
            body: err.message
        }
    }



}