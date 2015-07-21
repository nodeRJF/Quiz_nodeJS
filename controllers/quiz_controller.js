var models =  require('../models/models.js');
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


/*
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
*/

exports.load=function(req, res, next, quizId){
  models.Quiz.find(quizId).then(function(quiz){
    //console.log("."+req.query.respuesta+"respuesta:"+quiz[0].respuesta+".");
    if(quiz){
      res.quiz=quiz;
      next();
    } else{
      next(new Error("No existe quizId='" + quizId +"'"));
    }
  }
).catch(function(error){next (error);});
};




exports.index=function(req, res){
  console.log("search:" + req.query.search);
  if(req.query.search === undefined){
    models.Quiz.findAll().then(function(quizes){
    console.log("Quizes controles INDEX"+quizes);
      res.render('quizes/index.ejs',{quizes: quizes, errors: []});
    }
    ).catch(function(error){next (error);});
  }else{
    var search = '%'+req.query.search.replace(/ /g, '%')+'%'
    console.log("query.search search:" + search);
    models.Quiz.findAll({where: ["pregunta like ?", search]}).then(function(quizes){
    console.log("Quizes controles INDEX"+quizes);
      res.render('quizes/index.ejs',{quizes: quizes, errors: []});
    }
    ).catch(function(error){next (error);});
  }


};


//GET /quizes/:id
exports.show=function(req, res){
  console.log("respuesta:"+res.quiz);
  res.render('quizes/show',{quiz:res.quiz, errors: []});
};


exports.answer=function(req, res){
  var resultado ="Incorrecto";
    if(req.query.respuesta === res.quiz.respuesta ){
      var resultado ="Correcto";
    }
    res.render('quizes/answer',{quiz:res.quiz, respuesta:resultado, errors: []});
};


  exports.new=function(req, res){
    console.log("VVVVVVVVVVVV_new1");
    var quiz = models.Quiz.build(
      //crea objeto Quiz
      {pregunta:"Pregunta",respuesta:"Respuesta"}
    );
    res.render('quizes/new',{quiz:quiz, errors: []});
  };

  exports.create=function(req, res){
    console.log("VVVVVVVVVVVV_0");
      var quiz = models.Quiz.build(req.body.quiz);

      quiz.validate()
         .then(function(err){
             if(err){
                res.render('quizes/new',{quiz:quiz, errors:err.errors});
             }else{
               //guarda en BBDD la nueva quiz
               quiz.save({fields: ["pregunta", "respuesta"]}).then(function(){
                 res.redirect('/quizes');
               })
             }
         }
       );
//res.redirect('/quizes');
  };
