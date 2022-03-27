const mailgun = require("mailgun-js");

const DOMAIN = 'mail.portfolioshop.tech';
const api_key = process.env["MAILGUN_API_KEY"];
const mg = mailgun({ apiKey: api_key, domain: DOMAIN });

module.exports = async function (context, req) {
    data = new URLSearchParams(req.body)
    const from = data.get("name") + " <noreply@portfolioshop.tech>";
    const to = data.get("user");
    const subject = data.get("subject");
    const text = data.get("message") +'\n Email of the Sender: '+data.get("email");
    const message ={
        from, to, subject, text
    }
    mg.messages().send(message);
    context.res.status(302)
    context.res.header('Location', context.req.headers.origin)
    context.done()
}