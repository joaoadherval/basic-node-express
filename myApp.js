var express = require('express');
var app = express();

console.log("Hello World")

// Express evaluates routes from top to bottom. Commenting this method so the next version below is used instead
//app.get("/", function(req, res) {
//    res.send('Hello Express');
//});

absolutePath = __dirname + "/views/index.html";

//app.get("/", function(req, res) {
//    res.sendFile(absolutePath);
//});

publicPath = __dirname + "/public";

app.use(express.static(publicPath));
app.use('/public', express.static(publicPath));

app.get("/json", function(req, res) {
    res.json({
        "message": "Hello json"
    });
});





























 module.exports = app;
