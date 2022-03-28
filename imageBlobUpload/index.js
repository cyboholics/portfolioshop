const AZURE_BLOB_CONNECTION_STRING = process.env["AZURE_BLOB_CONNECTION_STRING"]
const {BlobServiceClient} = require("@azure/storage-blob")
const {v4} = require('uuid');
const dataUriToBuffer = require('data-uri-to-buffer');

module.exports = async function (context, req) {
    const uri = req.body["uri"].split(",")[1];
    var buffer = Buffer.from(uri, 'base64');
    try{ 
        const blobServiceClient = await BlobServiceClient.fromConnectionString(AZURE_BLOB_CONNECTION_STRING);
        const container = "demoblob";
        const containerClient = await blobServiceClient.getContainerClient(container);
        const blobName = v4();
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        await blockBlobClient.upload(buffer, buffer.length);
        context.res = {
            body: {
                uri: `${process.env["AZURE_BLOB_URL"]}${blobName}`
            }
        }
    }catch (e) {
            context.res = {
                body: {
                    error: e.message
                }
        }
    }
    context.done();
}