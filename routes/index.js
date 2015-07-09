var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');


console.log("enroutador get quizes");
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);


router.get('/author', function(req, res) {
  console.log("enroutador get AUTHOR");
  res.render('author');
});


/* GET home page. */

router.get('/', function(req, res) {
  console.log("enroutador get INDEX");
  res.render('index', { title: 'Quiz' });
});


module.exports = router;
