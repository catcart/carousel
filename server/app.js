var express = require('express');
var dataFile = require('../models/data');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    console.log("I am your empty route");
    res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/getDataFile', function(req, res) {
    console.log("Here is your json data file!");
    res.send(dataFile);
});

var server = app.listen(process.env.PORT, function(){
     var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;