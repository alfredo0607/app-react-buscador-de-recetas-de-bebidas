import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

//crear en context
export const CategoriaConstext = createContext();

//provider es donde se encuentran las funciones

const CategoriaProvider = (props) => {
  const [categoria2, setcategoria] = useState([]);

  useEffect(() => {
    const consulatrApi = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
      const categoria = await axios.get(url);
      setcategoria(categoria.data.drinks);
    };
    consulatrApi();
  }, []);

  return (
    <CategoriaConstext.Provider
      value={{
        categoria2,
        setcategoria,
      }}
    >
      {props.children}
    </CategoriaConstext.Provider>
  );
};

export default CategoriaProvider;
