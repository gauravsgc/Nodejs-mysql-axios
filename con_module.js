var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "gauravpandey",
    multipleStatements: true,
});

con.connect(function (err) {
    if (err)
        console.log("not conencted");
    else
        console.log("connected");
});
module.exports = con;
