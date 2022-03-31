const AZURE_BLOB_CONNECTION_STRING = process.env["AZURE_BLOB_CONNECTION_STRING"]
const {BlobServiceClient} = require("@azure/storage-blob")
const {v4} = require('uuid')
const axios = require("axios")
const HOST = process.env["HOST"]

module.exports = async function (context, req) {
    const uri = req.body["uri"].split(",")[1]
    var token = req.query["token"]
    try{ 
        await axios.get(`${HOST}/api/GoogleAuthValidation?token=${token}`)
        var buffer = Buffer.from(uri, 'base64')
        const blobServiceClient = await BlobServiceClient.fromConnectionString(AZURE_BLOB_CONNECTION_STRING)
        const container = "portfolioshopimages"
        const containerClient = await blobServiceClient.getContainerClient(container)
        const blobName = v4()
        const blockBlobClient = containerClient.getBlockBlobClient(blobName)
        await blockBlobClient.upload(buffer, buffer.length)
        context.res = {
            statusCode: 200,
            body: {
                uri: `${process.env["AZURE_BLOB_URL"]}/${container}/${blobName}`
            },
            contentType: 'application/json'
        }
    }catch (e) {
            context.res = {
                statusCode: 500,
                body: {
                    message:"Internal Server Error",
                    error: e.message
                }
        }
    }
    context.done()
}