import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BuscarRecetaContext = createContext();

const BuscarReceta = (props) => {
  const [busqueda, setbusqueda] = useState({
    bebida: "",
    categoria: "",
  });
  const [recetas, setrecetas] = useState([]);
  const [consulta, setconsulta] = useState(false);

  const { bebida, categoria } = busqueda;

  useEffect(() => {
    if (consulta) {
      const consultarApi = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${bebida}&c=${categoria}`;

        const resultado = await axios.get(url);
        setrecetas(resultado.data.drinks);
      };
      consultarApi();
    }
  }, [bebida, categoria, consulta]);

  return (
    <BuscarRecetaContext.Provider
      value={{ recetas, busqueda, setbusqueda, setconsulta, setrecetas }}
    >
      {props.children}
    </BuscarRecetaContext.Provider>
  );
};

export default BuscarReceta;
