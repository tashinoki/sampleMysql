
const express = require('express');
const router = express.Router();
const {PythonShell} = require('python-shell');

/* GET home page. */
router.get('/', function(req, res, next) {

    const option  = {mode: 'text', args: [3, 3]};

    PythonShell.run('./routes/sample.py', option, (err, result) => {

        if(err) throw err;
        res.render('index', {title: result});
    });
});

module.exports = router;
