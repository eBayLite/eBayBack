import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';


import Timer from './TimerE';

export default class DetailsE extends Component {
  render() {
    return (
      <ProductConsumer>
        {value =>{
        const  {idE, companyE,imgE,infoE, priceE,titleE, inPanE, incE } = value.detailEnchere;
         return(
          
          <div className="container py-5">
          
          <div className="mx-auto text-center">
          <h1> <Timer>
               
           </Timer>
           </h1>
        </div>
          
       
       
         {/* title */}
         <div className="row">
         <div className="col-10 mx-auto text-center text-slanted my-5">
         <h1>{titleE}</h1>
         </div>

         </div>

         {/*  end title */}
          {/*  Info enchere */}
         <div className="row">
             <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
             <img src={imgE} className="img-fluid" alt="enchere"/>
             <h2 className="text-blue mt-5 ">
            <strong>

               Dernière offre reçu: {priceE} <span> €</span>

            </strong>

            </h2>
            <h4 className="mx-auto mt-2 ">
            <strong>

               Pour enchèrer: {incE} <span> €</span>

            </strong>

            </h4>
             </div>
               {/* enchere texte  */}
             <div className="col-10 mx-auto col-md-6 my-3 text-capitalized">
            <h3>Produit: {titleE}</h3>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">Vendeur: <span className="text-uppercase">{companyE}</span></h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
            A propos du produit :
            </p>
            <p className="text-muted lead ">{infoE} </p>

            {/* les boutons */}

            <div>
              <Link to="/enchereList">
              <button type="button" class="btn btn-outline-secondary"><i className="fas fa-arrow-left" /> Retour au enchères</button>
              </Link>
              <Link to="cartE">
              <button type="button " class="btn btn-outline-warning ml-2"
               disabled={inPanE?true:false}
               onClick={()=>{
                 value.addToCartE(idE);
               }}
               > {inPanE?"dans enchere": "Faire une offre"}</button>
               </Link>

           </div>

            

             </div>
            </div>
         </div>
          
          )
          
          
        }}
      </ProductConsumer>
    );
  }
}
