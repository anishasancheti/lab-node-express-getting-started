let http = require('http');

http.createServer(function(req, res)
{
    res.write("Node Server");
    res.end();
})
.listen(3000, () => console.log("Node server started at port 3000"));


var express = require('express');
var app = express();

app.get("/", function(req, res)
{
  res.send("Express Server");
});
app.listen(4000, () => console.log("Express server started at port 4000"));