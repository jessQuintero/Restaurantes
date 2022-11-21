import React from 'react'
import restaurantes from '../../data/restaurante.json'
import { Component } from 'react';


const HomePage=()=>{
return(

 



<ul>
        {restaurantes.map(restaurante => {
          return <HomeItems id={restaurante.id} key={restaurante.id} restaurante={restaurante} />;
        })}
      </ul>
      
    
  
)
};


class HomeItems extends Component {
    render () {
      const { restaurante} = this.props
  
      return (
    
        <div className="grid">
        <div className="row">
      
   
       <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="card shadow-lg">
                <div className="card-header bg-primary text-white"></div>
                <img src={restaurante.url} alt="" className="img-fluid" />
                </div>
                <div className="card-body">
                  <p className="h3">{restaurante.name}</p>
                  <p className="direccion">{restaurante.address}</p>
                  <p className="descripcion">{restaurante.profile}</p>
  
        
        </div>
  </div>
  </div>
  </div>
      )
    }
  }

export default HomePage