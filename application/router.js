module.exports = function (app){
    const enchere = require('./modules/encheres/controller');
    const produit = require('./modules/produits/controller')
    const user = require('./modules/users/controller')

    //user
    app.namespace('/user', function(){
        app.post()
    })

}