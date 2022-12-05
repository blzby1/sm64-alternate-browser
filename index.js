const express = require('express');

const app = express();

app.use('/', express.static(__dirname + '/w'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/w/sm64.html');
});


app.listen(3000, function(req, res) {
    console.log('app is running');
});