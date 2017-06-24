const http = require("http");
const express = require("express");
const app = express();

app.set('port', process.env.PORT || 8000);
app.use(serveStatic(__dirname));
app.listen(8000, function(err) {
    if (err) {
        throw err;
    }
    console.log('Express server listening on port 8000');
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
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});