const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

module.exports = async function (context, req) {
  const data = new URLSearchParams(req.body)
  const from = data.get("name");
  const to = data.get("user");
  const subject = data.get("subject");
  const text = data.get("message") +'\n From: '+data.get("email");

  var transporter = nodemailer.createTransport(
    smtpTransport({
      tls: { minVersion: "TLSv1", rejectUnauthorized: false },
      host: "smtp.portfolioshop.tech",
      secureConnection: false,
      connectionTimeout: 5 * 60 * 1000,
      port: 587,
      auth: {
        user: "ayush@portfolioshop.tech",
        pass: process.env["NODEMAILER_PASSWORD"]
      },
    })
  );
  var mailOptions = {
    from: "ayush@portfolioshop.tech",
    to: to,
    subject: subject,
    text: text,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    context.log(err.message);
  }

  context.res.header("Location", context.req.headers.origin);
  context.done();
};
