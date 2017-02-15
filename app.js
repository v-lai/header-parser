var express = require("express");
var app = express();

// ROOT ROUTE
app.get("/", function(req, res){
  var ip = req.ip;
  // var ip = req.connection.remoteAddress;

  var language = req.headers['accept-language'].split(',')[0];
  // var language = req.acceptsLanguages()[0];

  var software = req.headers['user-agent'].split(')')[0].split('(')[1];

  res.send(JSON.stringify({ ipaddress: ip, language: language, software: software }, null, '\t'));
});

// ANY OTHER ROUTE
app.get("*", function(req, res){
  res.send("Page not found.");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
  console.log("server is running");
});
