
import {useState} from 'react'
import restaurantes from '../data/restaurante.json'


export default function Search(){
  const [searchText, setSearchText] = useState("");
 

    return (
  
  <div  className="app">
    <form className="row g-12 needs-validation">
    <div className="mb-3">
      <label htmlFor="formGroupExampleInput" className="form-label"><h2>Buscar por nombre del Restaurante</h2></label>
      <input type="text" 
      onChange={(e) => setSearchText(e.target.value.toLowerCase())}
      className="form-control" 
      id="formGroupExampleInput" 
      placeholder="" 
      autoComplete="off" 
      required
      />
</div>


    
    <div className="col-sm-12">
      <button type="submit" className="btn btn-primary" >Buscar</button>

      <ul className="lista">
        {restaurantes.filter((asd) =>
          asd.name.toLowerCase().includes(searchText)
        ).map((user) => (

           <div key={user.id}>
           
            <div className="grid">
                <div className="row">
                     <div className="col-lg-3 col-md-6">
                     <div className="card shadow-lg">
                    <div className="card-header bg-primary text-white"></div>
                   <img src={user.url} alt="" className="img-fluid" />
               </div>
            </div>
           <div className="card-body">
                <p className="h3">{user.name}</p>
                <p className="direccion">{user.address}</p>
                <p className="descripcion">{user.profile}</p>
             
          </div>
   
          </div>
          </div>
          </div>
          
        ))}
        </ul>
        </div>
      </form>
      </div>
   );
   
 }
