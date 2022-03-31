const nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport')

module.exports = async function (context, req) {
    const data = new URLSearchParams(req.body)
    const from = data.get("name")
    const to = data.get("user")
    const email = data.get("email")
    const subject = data.get("subject")
    const text = data.get("message") + '\n From: ' + data.get("email")

    var transporter = nodemailer.createTransport(
        smtpTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            connectionTimeout: 5 * 60 * 1000,
            auth: {
                user: "portfolioshop.tech@gmail.com",
                pass: process.env["NODEMAILER_PASSWORD"]
            },
        })
    )
    var mailOptions = {
        from: `${from} <portfolioshop.tech@gmail.com>`,
        to: to,
        subject: subject,
        text: text,
    }
    try {
        await transporter.sendMail(mailOptions)
        context.res.status(302)
    } catch (err) {
        context.log(err.message)
        context.res.status(500)
    }
    context.res.header("Location", context.req.headers.origin)
    context.done()
}
