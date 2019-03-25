import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class CreerEnchere extends Component {
  render() {
    return (
      
                <div className="container py-5">
                  <h2 className="text-center mb-5">Créer une enchère</h2>
                   
                   <input class="form-control" type="text" placeholder="Le nom du produit"></input>
                


                   
               

                    <h6 className="text-blue"> Prix :  <span>(€)</span><input type="text" class="form-control " placeholder="Le prix" ></input>  </h6>
                
                  
                     <h6>Model : <input type="text" class="form-control" placeholder="Model" ></input> </h6>
                   
                 

                    <h6> Contact (Tél) :<input type="text" class="form-control"  placeholder="Contact (tél)"></input><span className="text-uppercase"></span></h6>
                         
                         <p className="text-capitalize font-weight-bold mt-3 mb-0"> Informations sur le produit :</p>
                         <p className="text-muted lead"><textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea></p>
                         <div>
                              
                         
                          <h6>Ajouter une photo de votre produit</h6>
                          <input type="file" class="form-control-file" id="exampleFormControlFile1" /> 
                      

                              <div className="mt-3">
                              <Link to="/enchereList">
                              <button type="button" class="btn btn-primary ">
                              Annuler
                              </button>
                               </Link>
                              
                               <Link to="/cartE">
                              <button type="button" class="btn btn-warning ml-3">
                              Valider la création
                              </button>
                              </Link>
                              </div>
                              


                              


                         </div>
                </div>
            )
          }}

       
    