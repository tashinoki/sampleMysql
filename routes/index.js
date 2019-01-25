
const express = require('express');
const router = express.Router();
const {PythonShell} = require('python-shell');

/* GET home page. */
router.get('/', function(req, res, next) {

    PythonShell.run('./sample.py', (err, result) => {
        if(err) throw err;
        res.render('index', {title: result});
    });
});

module.exports = router;
