var express = require('express'),
    index   = require('../controllers/index'),
    router  = express.Router();

router.route('/').get(index);


module.exports = router;
