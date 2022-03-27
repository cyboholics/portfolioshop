const mailgun = require("mailgun-js");

const DOMAIN = 'mail.portfolioshop.tech';
const api_key = process.env["MAILGUN_API_KEY"];

module.exports = async function (context, req) {
    const data = new URLSearchParams(req.body)
    const from = data.get("name") + " <noreply@portfolioshop.tech>";
    const to = data.get("user");
    const subject = data.get("subject");
    const text = data.get("message") +'\n Email of the Sender: '+data.get("email");

    const nodemailer = require('nodemailer');
    var smtpTransport = require('nodemailer-smtp-transport');
    var transporter = nodemailer.createTransport(smtpTransport ({
        tls: {minVersion: 'TLSv1',rejectUnauthorized: false},
            host:'smtp.portfolioshop.tech',
        secureConnection: false,
        port: 587,
        auth: {
            user: "ayush@portfolioshop.tech",
            pass: "zrFL$pIfY8",
        }
        }));
        var mailOptions = {
            from: from,
            to:to,
            subject:subject,
            text: text
        };
        transporter.sendMail(mailOptions, function(error, info){
            if(!error){
                context.log("Email sent successfully")
                context.res.status(302)
            }else{
                context.log("Error in Nodemailer :: "+error.message);
                context.res.status(500)
            }
        });
    context.res.header('Location', context.req.headers.origin)
    context.done()
}