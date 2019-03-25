import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function TitleE({name,title}){
 return(
  <div className="row">

      <div className="col-10 mx-auto my-2 text-center text-title">

        <h2 className="text-capitalize font-weight-bold "  >
          {name}
        <strong className="text-blue">{title}</strong>
        </h2>

      </div>

  </div>

 );

}

export default TitleE;