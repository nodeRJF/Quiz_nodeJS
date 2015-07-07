

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
