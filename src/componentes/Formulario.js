import React, { Fragment, useContext, useState } from "react";
import { BuscarRecetaContext } from "../context/BuscarReceta";
import { CategoriaConstext } from "../context/CategoriaConstext";
import Error from "./Error";

export default function Formulario() {
  
  const { setbusqueda, setconsulta } = useContext(BuscarRecetaContext);
  const { categoria2 } = useContext(CategoriaConstext);
 
  const [datos, setdatos] = useState({
    bebida: "",
    categoria: "",
  });

  const [error, seterror] = useState(false);

  const { bebida, categoria } = datos;
  const actualizarstate = (e) => {
    setdatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();

    if (bebida.trim() === "" || categoria.trim() === "") {
      seterror(true);
      return;
    }
    seterror(false);
    setbusqueda(datos);
    setconsulta(true);
  };

  return (
    <Fragment>
      <h3>Busca Recetas de Bebidas</h3>
      {error ? <Error mensaje="Todos Los Campos Deben Estar Llenos " /> : null}
      <form onSubmit={enviarDatos}>
        <input
          className="u-full-width"
          type="text"
          name="bebida"
          placeholder="Nombre de la Bebida"
          onChange={actualizarstate}
          value={bebida}
        />
        <select
          className="u-full-width"
          name="categoria"
          onChange={actualizarstate}
          value={categoria}
        >
          <option>---Selecciones---</option>
          {categoria2.map((categorias) => (
            <option key={categorias.strCategory} value={categorias.strCategory}>
              {categorias.strCategory}
            </option>
          ))}
        </select>

        <button>Buscar Bebidas </button>
      </form>
    </Fragment>
  );
}
