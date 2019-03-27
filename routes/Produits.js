const express = require("express");
const Router = express.Router();
//const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const assert = require('assert');

const Produit = require("../models/Produit");
Router.use(cors());

process.env.SECRET_KEY = 'secret';

Router.post('/vendre', (req, res) => {
    const today = new Date()
    const produitData = {
        nom: req.body.nom,
        categorie: req.body.categorie,
        prix: req.body.prix,
        prix_min: req.body.prix_min,
        description: req.body.description,
        vendeur: req.body.vendeur,
        created: today
    };

    let errors = [];

  if (!produitData.nom || !produitData.categorie || !produitData.prix || !produitData.prix_min || !produitData.description || !produitData.vendeur) {
    errors.push({ msg: 'Remplissez tous les champs!' });
  }

  if (produitData.prix_min > produitData.prix) {
    errors.push({ msg: 'Le prix doit être supérieur au prix minimum' });
  }

  if (produitData.description.length > 160){
      errors.push({msg: 'La description ne doit pas dépasser 160 caractères'});
  }

  if (produitData.prix_min < 10) {
    errors.push({ msg: 'erreur, le prix minimum doit être au minimum égal à 10' });
  }

  else {
    Produit.create(produitData).then(item => {res.send("item sauvegardé");}).catch(err => {res.status(400).send("impossible de sauvegarder le produit");});

    //produitData.save().then(item => {res.send("item sauvegardé");}).catch(err => {res.status(400).send("impossible de sauvegarder le produit");});
    }

  /*
  if (errors.length > 0) {
    res.render('register', {
      errors,
      nom,
      prenom,
      adresse,
      ville,
      code_postal,
      password,
      password2,
      email,
      phone
    });
  }*/

}); 

Router.get('/listventes', (req, res) => {
   
    Produit.find({}, function(err, docs){
        if (err) res.json(err);
        else res.json({produits:docs});
    });

    /*Produit.find({})
        .then(item => {
            res.json({status: produit.nom + 'est disponible'});
        })
        .catch(err => {
            res.status(400).send("impossible d'afficher les données");
        });*/
    
    /*Produit.find({}).toArray(function(err, result){
        if (err) throw err;
        console.log(result);
    })*/
});

Router.post('/suppvente/:id?', (req, res) =>{
    const id = req.body.id;
    /*
    Produit.deleteOne({"_id": objectID(id)}, function(err,docs){
        if (err) res.json(err);
        else res.json({produits: docs});
    });*/

    Produit.remove({_id: req.body.id}, function(err, docs){
        if (err) res.json(err);
        else res.json({produits: docs});
    })
});

module.exports = Router;