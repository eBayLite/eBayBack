const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Enchere = require('./Enchere')

const UserSchema = new Schema({
    nom:{
        type: String,
        required: true
    },
    prenom:{
        type: String,
        required: true
    },
    adresse:{
        type: String,
        required: true
    },
    ville:{
        type: String,
        required: true
    },
    code_postal:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    password2:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    admin:{
        type: Boolean
    },
    phone:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    encheres: [{ type: Schema.Types.ObjectId, ref: 'Enchere' }]
});

module.exports = User = mongoose.model('User', UserSchema);