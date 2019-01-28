
const express = require('express');
const router = express.Router();
const {PythonShell} = require('python-shell');

/* GET home page. */
router.get('/', function(req, res, next) {


    // python スクリプトへ渡す mime 情報と引数
    const option  = {mode: 'text', args: [3, 3]};

    // python スクリプトの実行
    PythonShell.run('./routes/sample.py', option, (err, result) => {

        if(err) throw err;
        res.render('index', {title: result});
    });
});

module.exports = router;
