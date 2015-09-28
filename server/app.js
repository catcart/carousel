var express = require('express');
var carouselData = require("../models/data");
var app = express();

app.use(express.static(__dirname + '/public'));

var server = app.listen(process.env.PORT, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

app.get('/', function(req, res){
    console.log("I am your empty route");
    res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/getcarouselData', function(req, res) {
    console.log("Here is your json data file!");
    res.send(carouselData);
});



module.exports = app;