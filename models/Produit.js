const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProduitSchema = new Schema({
    nom:{
        type: String
    },
    categorie:{
        type: String
    },
    prix:{
        type: Number
    },
    prix_min:{
        type: Number
    },
    description:{
        type: String
    },
    vendeur:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Produit = mongoose.model('produits', ProduitSchema);