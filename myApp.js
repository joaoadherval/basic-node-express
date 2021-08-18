var express = require('express');
var app = express();

console.log("Hello World")

// Express evaluates routes from top to bottom. Commenting this method so the next version below is used instead
//app.get("/", function(req, res) {
//    res.send('Hello Express');
//});

app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

absolutePath = __dirname + "/views/index.html";

app.get("/", function(req, res) {
   res.sendFile(absolutePath);
});

publicPath = __dirname + "/public";

app.use(express.static(publicPath));
app.use('/public', express.static(publicPath));

app.get("/json", function(req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase"){
      response = "Hello json".toUpperCase();
    } else {
      response = "Hello json";
    }
    res.json({
        "message": response
    });
});



























 module.exports = app;
