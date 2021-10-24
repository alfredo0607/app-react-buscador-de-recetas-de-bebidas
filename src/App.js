import React from "react";
import Formulario from "./componentes/Formulario";
import Listar from "./componentes/Listar";
import BuscarReceta from "./context/BuscarReceta";
import CategoriaProvider from "./context/CategoriaConstext";
import Model from "./context/Model";
import "./style.css";

function App() {
  return (
    <CategoriaProvider>
      <BuscarReceta>
        <Model>
          <header>
            <h1>Busca Recetas de Bebidas</h1>
          </header>
          <div className="container">
            <Formulario />
          </div>
          <Listar />
        </Model>
      </BuscarReceta>
    </CategoriaProvider>
  );
}

export default App;
