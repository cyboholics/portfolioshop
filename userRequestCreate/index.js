const { userRequestModel } = require("../models/index")
const axios = require("axios")
const HOST = process.env["HOST"]

module.exports = async function (context, req) {
  var token = req.query["token"]
  let res
  try {
    res = await axios.get(`${HOST}/api/GoogleAuthValidation?token=${token}`)
  } catch (err) {
    context.res = {
      statusCode: 401,
      body: {
        message: "Unauthorized Access",
        err: err.message,
      },
    }
    context.done()
  }
  const usernm = res.data
  const raisedTime = Date.now()
  const userReq = req.body.userRequest
  try {
    const ticket = await userRequestModel.create({
      username: usernm,
      userRequest: userReq,
      raisedTimestamp: raisedTime,
    })
    context.res = {
      statusCode: 200,
      body: {
        message: ticket._id,
        err: null,
      },
      headers: {
        "Content-Type": 'application/json'
      }
    }
  } catch (err) {
    context.res = {
      statusCode: 400,
      body: err.message,
    }
  }
  context.done()
}
