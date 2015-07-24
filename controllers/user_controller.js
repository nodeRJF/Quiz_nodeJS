var users={admin:{id:1, username:"admin",password:"1234"},
           pepe:{id:2, username:"pepe",password:"5678"}
         }


exports.autenticar=function(login, password,callback){
   if(users[login]){
     if(password === users[login].password){
       console.log("users[login]"+users[login]);
       console.log("users[login]"+users[login].username);

          callback(null, users[login]);
     }else{
       callback(new Error("Contraseña incorrecta."));
     }
   }else{
     callback(new Error("Usuario no existe."));
   }
};
