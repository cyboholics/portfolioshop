const userRequest = require("../models/user_request_schema");
const mongoose = require("mongoose");
const mongoLink = process.env["MONGO_LINK"];
const axios = require("axios");
const HOST = process.env["HOST"];

mongoose.connect(
  mongoLink,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, result) => {
    if (err) console.log(err);
  }
);

module.exports = async function (context, req) {
  var token = req.query["token"];
  let res;
  try {
    res = await axios.get(`${HOST}/api/GoogleAuthValidation?token=${token}`);
  } catch (err) {
    context.res = {
      statusCode: 403,
      body: {
        message: "Unauthorized Access",
        err: err.message,
      },
    };
    context.done();
  }
  // if token valid
  var errorMsg = null;
  const usernm = res.data;
  const raisedTime = Date.now();
  const userReq = req.body.userRequest;
  try {
    const result = await userRequest.create({
      username: usernm,
      userRequest: userReq,
      raisedTimestamp: raisedTime,
    });
    context.res = {
      body: {
        message: "Inserted",
        err: null,
      },
    };
  } catch (err) {
    context.res = {
      statusCode: 400,
      body: {
        message: "Database Error",
        err: err.message,
      },
    };
  }
  context.done();
};
