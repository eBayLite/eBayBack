const service = require("../services/produitsService");


   exports.vendre = function(req, res){
      service.vendre(req).then((prod)=>{
      console.log(res);
      res.send(prod)
   });
}

   exports.listventes = function(req, res){
      service.listventes(req).then(result =>{res.send(result); console.log(result)});
   };

   exports.suppvente = async function(req){
      await service.suppvente(req);
   };


/*exports.vendre = function(req, res){
   service.vendre(req, res);
}; 


exports.listventes = function(req, res){
   service.listventes(req, res);
};*/

/*exports.listventes = function(req){
   service.listventes(req).then((res)=>{
      console.log(res);
      //JSON.parse(JSON.stringify(res));
      //const obj = JSON.stringify(res);
      
      
      //console.log(res);
      /*res.json().then(data => ({
         data: data,
         status: res.status
      })).then(res => {
         console.log(res.status)
      })
   });*/

//https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
   //https://stackoverflow.com/questions/35034506/how-to-use-promise-with-express-in-node-js