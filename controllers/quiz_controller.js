
/*
exports.question=function(req, res) {
  console.log("enroutador get QUESTION");
  res.render('quizes/question', { pregunta: 'Capital de Italia' });
};

exports.answer=function(req, res) {
  console.log("enroutador get ANSWER");
  var mensaje = "";
  if(req.query.respuesta.match(/roma/i)){
			mensaje=  "Correcto!!!"
	}else{
			mensaje=  "Lo siento '"+ req.query.respuesta +"' es incorrecta."
	}
  res.render('quizes/answer', { respuesta: mensaje});
};
*/

var models =  require('../models/models.js');
exports.question=function(req, res){
  models.Quiz.findAll().success(function(quiz){
    res.render('quizes/question',{pregunta:quiz[0].pregunta});
  });
};

exports.answer=function(req, res){

  models.Quiz.findAll().success(function(quiz){
    //console.log("."+req.query.respuesta+"respuesta:"+quiz[0].respuesta+".");
    if(req.query.respuesta === quiz[0].respuesta ){
      res.render('quizes/answer',{respuesta:'Correcto'});
    } else{
      res.render('quizes/answer',{respuesta:'Incorrecto'});
    }
  });
};
