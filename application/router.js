module.exports = function (app){
    const enchere = require('./modules/encheres/controller');
    const produit = require('./modules/produits/controller')
    const user = require('./modules/users/controller')

    //user
    app.namespace('/user', function(){
        app.post('register', user.register);
        app.post('login', user.login);
        app.get('profile', user.profile);
    });

    //produits
    app.namespace('/produit', function(){
        app.post('vendre', produit.register);
        app.post('listventes', produit.login);
        /*app.namespace('/suppvente', function(){
            app.post('/:id?', produit.remove)
        });*/   
    });

    app.namespace('/enchere', function(){
        app.post('creer', enchere.creer);
        app.get('listench', enchere.listench);
    });

}