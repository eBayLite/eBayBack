import React from 'react';




function CartItem({item,value}){
    const {id, title, img, price, total, count } = item;
    const {increment, decrement, removeItem} = value;
   return(
       <div className="row my-2 text-capitalize text-center">

       <div className="col-10 mx-auto col-lg-2">
           <img src={img} style={{width:'5rem', height:'5rem'}} className="img-fluid" alt="product" />
       </div>

       <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Produit:</span>
        {title}
       </div>

       <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Prix:</span>
        {price}
       </div>

        {/* quantité */}
       <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
       <div className="d-flex justify-content-center">
            <div>
                <span className="btn btn-black mx-1" onClick={()=>decrement(id)}><i className="fas fa-minus" /></span>
                <span className="btn btn-black mx-1" >{count}</span>
                <span className="btn btn-black mx-1" onClick={()=>increment(id)}><i className="fas fa-plus" /></span>
            </div>
        </div>
        </div>
       {/*  fin quantité */}
       
       <div className="col-10 mx-auto col-lg-2">
             <div className="cart-icon" onClick={()=>removeItem(id)}>
              <i className="fas fa-trash-alt" />

             </div>
       
       </div>

      
      
       <div className="col-10 mx-auto col-lg-2">
        <strong>total produit: {total} €</strong>
       
       </div>

       

       </div>
   );

}

export default CartItem;