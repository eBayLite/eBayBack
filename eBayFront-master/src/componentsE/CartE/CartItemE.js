import React from 'react';




function CartItemE({item,value}){
    const {idE, titleE, imgE, priceE } = item;
    const {incrementE} = value;
   return(
       <div className="row my-2 text-capitalize text-center">

       <div className="col-10 mx-auto col-lg-2">
           <img src={imgE} style={{width:'5rem', height:'5rem'}} className="img-fluid" alt="product" />
       </div>

       <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Produit:</span>
        {titleE}
       </div>

       <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Dèrniere offre :</span>
        {priceE}
       </div>

        {/* quantité */}
       <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
       <div className="d-flex justify-content-center">
            <div>
                
                <span className="btn btn-black mx-1" >{priceE}</span>
                <span className="btn btn-black mx-1" onClick={()=>incrementE(idE)}><i className="fas fa-plus" /></span>
            </div>
        </div>
        </div>
       {/*  fin quantité */}
       
       

      
      
       

       

       </div>
   );

}

export default CartItemE;