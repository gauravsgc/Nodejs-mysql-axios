const { json } = require('body-parser');
const express = require('express');
const Router = express.Router();
const con = require("./con_module")

Router.get("/", (req, res) => {
    con.query("SELECT * FROM example", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });


})
Router.get('/:id', (req, res) => {
    //res.send('The id you specified is ' + req.params.id);

    con.query(`SELECT * FROM example where rollno=${req.params.id}`, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });


})
Router.get('/:id', (req, res) => {
    //res.send('The id you specified is ' + req.params.id);

    con.query(`SELECT * FROM example where rollno=${req.params.id}`, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });


})
Router.post("/insert/:id/:name", (req, res) => {
    //res.send('The id you specified is ' + req.params.id + "" + req.params.name);

    var id = req.params.id;

    var nm = req.params.name;
    //res.send(`INSERT into  example (name,rollno)= values('${nm}' ,${id})`);
    con.query(`INSERT into  example(name, rollno) values('${nm}', ${id})`, (err, rows, fields) => {
        if (!err)
            res.send("inserted  Successfully");
        else
            res.send(err);

    });
})
Router.put("/edit/:id/:name", (req, res) => {
    //res.send('The id you specified is ' + req.params.id + "" + req.params.name);

    var id = req.params.id;

    var nm = req.params.name;
    //res.send(`UPDATE example Set name = ${ nm } where rollno = ${ id }`);
    con.query(`UPDATE example Set name = '${nm}' where rollno = ${id}`, (err, rows, fields) => {
        if (!err)
            res.send("updated Successfully");
        else
            res.send(err);

    });
})
Router.delete('/Delete/:id', (req, res) => {
    //res.send('The id you specified is ' + req.params.id);

    con.query(`DELETE FROM example where rollno =? `, [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send("Deleted Successfully");
        else
            console.log(err);
    });


})
module.exports = Router;
