import React from 'react'
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function New() {
  const [nombre, setNombre] = useState("");
  const [desc, setDesc] = useState("");
  const [ubicacion, setubicacion] = useState("");
  const [urlimagen, setUrlImagen] = useState("");
  const [data, setData] = useState([]);


  const nombreOnchangeHandler = (evento) => {
    setNombre(evento.target.value);
  };
  const desOnchangeHandler = (evento) => {
    setDesc(evento.target.value);
  };

  const ubicacionOnchangeHandler = (evento) => {
    setubicacion(evento.target.value);
  };

  const urlImagenOnchangeHandler = (evento) => {
    setUrlImagen(evento.target.value);
  };

  

  const buttonOnsubmitHandler = (evento) => {
    evento.preventDefault();
    console.log("enviando...");

    const datosNuevos = {
      id: uuidv4(),
      nombre: nombre,
      desc: desc,
      ubicacion:ubicacion,
      urlimagen:urlimagen
    };
    
    setNombre("");
    setDesc("");
    setubicacion("");
    setUrlImagen("");

    const newData = [...data, datosNuevos];
    setData(newData);
    console.log(newData);
    
   localStorage.setItem("key", JSON.stringify(newData));
          };

  return (
    
    <div  className="new">

    <form onSubmit={buttonOnsubmitHandler}>
      <label htmlFor="formGroupExampleInput" className="form-label"><h3>Nombre del Restaurante</h3></label>
      <input
        type="text"
        placeholder="Nombre del Restaurante"
        name="text"
        value={nombre}
        onChange={nombreOnchangeHandler}
        className="form-control" 
        id="formGroupExampleInput" 
        autoComplete="off" 
        required
      />
        <label htmlFor="formGroupExampleInput" className="form-label"><h3>Tipo de comida</h3></label>
      <input
        type="text"
        placeholder="Tipo de comida"
        name="text"
        value={desc}
        onChange={desOnchangeHandler}
        className="form-control" 
        id="formGroupExampleInput" 
        autoComplete="off" 
        required
      />


<label htmlFor="formGroupExampleInput" className="form-label"><h3>Donde esta ubicado</h3></label>
<input
        type="text"
        placeholder="En donde esta ubicado el Restaurante"
        name="text"
        value={ubicacion}
        onChange={ubicacionOnchangeHandler}
        className="form-control" 
        id="formGroupExampleInput" 
        autoComplete="off" 
        required
      />

<label htmlFor="formGroupExampleInput" className="form-label"><h3>Link de la imagen del Restaurante</h3></label>
<input
        type="text"
        placeholder="enlace de la imagen"
        name="text"
        value={urlimagen}
        onChange={urlImagenOnchangeHandler}
        className="form-control" 
        id="formGroupExampleInput" 
        autoComplete="off" 
        required
      />

<div className="col-sm-20">
      <button className="btn btn-primary">Añadir</button>
      </div>

    </form>
  
    </div>
  );
}