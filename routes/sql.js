const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "kinoshita",
    password: "fMxJUM6G",
    database: "kinoshita",
});

/* GET home page. */
router.get('/', function(req, res, next) {

    const sql = 'select * from `test`';

    con.connect(function(err) {
        if (err) throw err;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Result: " + result);
            res.render('index', {title: result[0]['test']})
        });
    });

});

module.exports = router;
