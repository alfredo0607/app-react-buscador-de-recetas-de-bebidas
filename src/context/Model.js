import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModelContext = createContext();

const Model = (props) => {
  const [id, setid] = useState(null);
  const [guardarReceta, setguardarReceta] = useState({});

  useEffect(() => {
    const consultarApi = async () => {
      if (!id) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      const respuesta = await axios.get(url);
      setguardarReceta(respuesta.data.drinks[0]);
    };

    consultarApi();
  }, [id]);

  return (
    <ModelContext.Provider
      value={{ id, setid, guardarReceta, setguardarReceta }}
    >
      {props.children}
    </ModelContext.Provider>
  );
};

export default Model;
