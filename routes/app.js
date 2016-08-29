var express = require('express');
var router = express.Router();
var User = require('../models/user')

router.get('/', function(req, res, next) {

    res.render('node');
});

router.post('/', function(req, res, next) {
    var user = new User({
      firstName: 'Caleb',
      lastName: 'Stokka',
      password: 'secret',
      email: 'caleb.stokka@gmail.com'
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
