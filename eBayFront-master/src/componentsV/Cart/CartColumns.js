import React from 'react';

function CartColumns(){
return(
<div className="container-fluid text-center d-none d-lg-block "> 
 
  <div className="row">

   <div className="col-10 mx-auto col-lg-2">
    <p className="text-uppercase">Produits</p>
   </div>

   <div className="col-10 mx-auto col-lg-2">
    <p className="text-uppercase">Nom</p>
   </div>

   <div className="col-10 mx-auto col-lg-2">
    <p className="text-uppercase">Prix (u)</p>
   </div>
   <div className="col-10 mx-auto col-lg-2">
    <p className="text-uppercase">Quantité</p>
   </div>
   <div className="col-10 mx-auto col-lg-2">
    <p className="text-uppercase">Supprimer</p>
   </div>
   <div className="col-10 mx-auto col-lg-2">
    <p className="text-uppercase">Total</p>
   </div>

  </div>

</div>

)
}
export default CartColumns;