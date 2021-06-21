/*function con() {
    var http = require('http');

    var dt = require('./con_module');
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        //res.end('Hello World!');
        res.write("The date and time are currently: ");
        res.end();
    }).listen(8080);
}
con();*/

var mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const stock = require("./stock");
const con = require("./con_module");
app.use("/stock", stock);
//app.use("/stock/:id", stock);

app.listen(8000);
