var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CS355', subtitle: 'Intro to Web Developement'});
});

/* GET Template Example*/
router.get('/template_example', function(req,res,next){
    res.render('template_example', {first_name: req.query.first_name, last_name: req.query.last_name, title: 'CS355'});
});

/* Resume Template */
router.get('/resume_view', function(req,res,next){
    res.render('resume_view', {first_name: "Sean", last_name: "Miltenberger", major: "Computer Science"});
});
module.exports = router;
