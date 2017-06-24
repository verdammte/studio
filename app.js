const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const serveStatic = require('serve-static');

app.set('port', process.env.PORT || 8080);
app.use(serveStatic(__dirname));
app.listen(8080, function(err) {
    if (err) {
        throw err;
    }
    console.log('Express: port 8080');
});

//set up app
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    type: 'application/*+json'
}));

app.use(function(req, res, next) {
    //create global full-access connection on successful connection -- fallback for issue where connection is killed on error
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//Application endpoints
app.get('/', function(req, res) {
    res.sendFile(path.join(_dirname + '/index.html'));
});