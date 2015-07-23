var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var commentController = require('../controllers/comment_controller');


console.log("enroutador get quizes");
//router.get('/quizes/question', quizController.question);
//router.get('/quizes/answer', quizController.answer);

//Autoload
router.param('quizId', quizController.load)

router.get('/quizes',                         quizController.index);
router.get('/quizes/:quizId(\\d+)',           quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',    quizController.answer);
router.get('/quizes/new',                         quizController.new);
router.post('/quizes/create',                     quizController.create);
router.get('/quizes/:quizId(\\d+)/edit',          quizController.edit);
router.put('/quizes/:quizId(\\d+)',          quizController.update);
router.delete('/quizes/:quizId(\\d+)',          quizController.destroy);

router.get('/quizes/:quizId(\\d+)/comments/new',       commentController.new);
router.post('/quizes/:quizId(\\d+)/comments',          commentController.create);

/*router.post('/quizes/create',           function(req, res){
  console.log("roueter CREATE_____");
             quizController.create;
           });
*/
router.get('/author', function(req, res) {
  console.log("enroutador get AUTHOR");
  res.render('author',{errors: []});
});


/* GET home page. */

router.get('/', function(req, res) {
  console.log("enroutador get INDEX");
  res.render('index', { title: 'Quiz', errors: [] });
});


module.exports = router;
