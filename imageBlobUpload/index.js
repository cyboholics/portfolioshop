const AZURE_BLOB_CONNECTION_STRING = process.env["AZURE_BLOB_CONNECTION_STRING"]
const {BlobServiceClient} = require("@azure/storage-blob")
const {v4} = require('uuid');

module.exports = async function (context, req) {
    const uri = req.body["uri"].split(",")[1];
    var buffer = Buffer.from(uri, 'base64');
    try{ 
        const blobServiceClient = await BlobServiceClient.fromConnectionString(AZURE_BLOB_CONNECTION_STRING);
        const container = "portfolioshopimages";
        const containerClient = await blobServiceClient.getContainerClient(container);
        const blobName = v4();
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        await blockBlobClient.upload(buffer, buffer.length);
        context.res = {
            statusCode: 200,
            body: {
                uri: `${process.env["AZURE_BLOB_URL"]}/${container}/${blobName}`
            }
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
    context.done();
}