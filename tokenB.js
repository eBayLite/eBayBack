

exports.verifierToken = function(req, res, next){
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined'){
      const bearer = bearerHeader.split(' ');
      const bearerTok = bearer[1];
      req.token = bearerTok;
      next();
      //execute le service qui vient juste après
  }
  else {
      //non authorisé
      res.sendStatus(403);
  }
}

exports.verifAdminTok = function(req, res, next){
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined'){
      const bearer = bearerHeader.split(' ');
      const bearerTok = bearer[1];
      req.token = bearerTok;
      if(req.token.admin ===true){
      next();}
      //execute le service qui vient juste après
      else{
        return null
      }
  }
  else {
      //non authorisé
      res.sendStatus(403);
  }
}