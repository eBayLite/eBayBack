const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.register = function(req, res){
    const today = new Date()
    const userData = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        adresse: req.body.adresse,
        ville: req.body.ville,
        code_postal: req.body.code_postal,
        password: req.body.password,
        password2: req.body.password2,
        email: req.body.email,
        phone: req.body.phone,
        created: today
    };

    let errors = [];

  if (!userData.nom || !userData.prenom || !userData.adresse || !userData.ville || !userData.code_postal || !userData.password || !userData.password2 || !userData.email || !userData.phone) {
    errors.push({ msg: 'Remplissez tous les champs!' });
  }

  if (userData.password != userData.password2) {
    errors.push({ msg: 'Les passwords ne concordent pas!' });
  }

  if (userData.password.length < 6) {
    errors.push({ msg: 'le mot de passe doit mesurer au moins 6 caracteres' });
  }
  
    else {
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash;
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.email + ' enregistré!' })
                        })
                        .catch(err => {
                            res.send('erreur: ' + err)
                        })
                });
            } else {
                res.json({ error: 'User existe déjà' });
            }
        })
        .catch(err => {
            res.send('erreur: ' + err);
        })}
}; 

exports.login = function(req, res){
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        _id: user._id,
                        nom: user.nom,
                        prenom: user.prenom,
                        ville: user.ville,
                        code_postal: user.code_postal,
                        password: user.password,
                        password2: user.password2,
                        email: user.email,
                        phone: user.phone
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    });
                    res.send(token)
                } else {
                    res.json({ error: "Le user n'existe pas" });
                }
            } else {
                res.json({ error: "Le user n'existe pas" });
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        });
};

exports.profile = function(req, res){
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);

    User.findOne({
        _id: decoded._id
    })
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.send("Le user n'existe pas")
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
};