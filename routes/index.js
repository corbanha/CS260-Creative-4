var express = require('express');
var router = express.Router();
var faker = require('faker');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("index.html", {root: "public"});
});


router.get('/getRandInfo', function(req, res){
    //here we need to send them the data of the random new identity
    res.send(faker.helpers.createCard());
});

module.exports = router;
