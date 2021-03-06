var express = require('express');
var app = express();
var bodyParser = require("body-parser");

console.log("Hello World")

// Express evaluates routes from top to bottom. Commenting this method so the next version below is used instead
//app.get("/", function(req, res) {
//    res.send('Hello Express');
//});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.get(
  "/now",
  function(req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function(req, res) {
    res.send({
      time: req.time
    });
  }
);

app.get("/:word/echo", function(req, res) {
  res.json({
    "echo": req.params.word
  });
});

app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
});

app.post("/name", function(req, res) {
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});

























 module.exports = app;
