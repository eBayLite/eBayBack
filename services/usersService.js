const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require('joi');

exports.register = async function(req, res){
    const today = new Date();
    const schema = Joi.object().keys({
        nom : Joi.string().min(3).max(20).required().error(new Error("veuillez entrer un nom d'au moins 3 à 20 caractères")),
        prenom : Joi.string().min(3).max(20).required().error(new Error("veuillez entrer un prénom d'au moins 3 à 20 caractères")),
        adresse : Joi.string().min(5).max(40).required().error(new Error("veuillez entrer une adresse valide")),
        ville : Joi.string().min(4).max(25).required().error(new Error("veuillez entrer une ville valide")),
        code_postal : Joi.string().min(5).max(5).required().error(new Error("entrez un code postal existant")),
        password : Joi.string().min(3).max(20).required().error(new Error("veuillez entrer un mot de passe d'au moins 3 à 20 caractères")),
        password2: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } }),
        email : Joi.array().items(Joi.string().email().max(256).required()).single().required().error(new Error("veuillez entrer un email valide")),
        phone : Joi.string().min(10).max(10).required().error(new Error("veuillez entrer un numéro de téléphone valide")),
        admin : Joi.boolean().error(new Error("cette valeur est sois 'faux' ou 'vraie'")),
        created : today
    });
    
    return await Joi.validate(req.body, schema, async(err, result) => {
        if(err) {console.log(err)}
  
        else {
        return User.findOne({
            email: req.body.email
        })
            .then(user => {
                if (!user) {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        req.body.password = hash;
                        console.log(result); //to be removed
                        return User.create(req.body).then(util => {
                            return util });
                    });
                    return result
                } else {
                    return null
                }
            })
        }
    });
}

exports.login = function(req, res){
   return User.findOne({
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
                        email: user.email,
                        phone: user.phone,
                        encheres: user.encheres,
                        admin: user.admin
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 3600
                    });
                     return token
                } else {
                    return null
                }
            } else {
               return null
            }
        });
};

exports.profile = function(req){
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);

    return User.findOne({
        _id: decoded._id
    })
        .then(user => {
            if (user) {
                //res.json(user)
                return user
            } else {
                //res.send("Le user n'existe pas")
                return null
            }
        })
};

exports.delUser = async function(req){
    User.findById(req.params.id, async function(err, docs){
        console.log(docs); //todo remove after
        if(err) { console.log(err) }
        else if(docs!== undefined && docs!==null) {
            return docs.remove()
        }
    });
}