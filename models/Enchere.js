const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EnchereSchema = new Schema({
    nom:{
        type: String
    },
    etat:{
        type: String
    },
    prix:{
        type: Number
    },
    prix_ench:{
        type: Number
    },
    vendeur:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Enchere = mongoose.model('encheres', EnchereSchema);