const ejs = require('ejs');
const path = require("path");
const fs = require("fs");
module.exports = async function (context, req) {
    const data = req.body.data;
    const template = req.body.template;
    const templateFile = fs.readFileSync(__dirname + "/views/"+template+'.ejs', "utf8");
    context.res.body = ejs.render(templateFile, data);
    context.res.statusCode = 200;
    context.res.headers = {
        'Content-Type' : "text/html"
    }
    context.done();
}