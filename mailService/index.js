const mailgun = require("mailgun-js");

const DOMAIN = 'mail.portfolioshop.tech';
const api_key = 'c8a9c2ca753382abdb7509d411dbeb28-0677517f-88b9ae35'
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
}