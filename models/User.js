const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nom:{
        type: String
    },
    prenom:{
        type: String
    },
    adresse:{
        type: String
    },
    ville:{
        type: String
    },
    code_postal:{
        type: String
    },
    password:{
        type: String
    },
    password2:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('users', UserSchema);