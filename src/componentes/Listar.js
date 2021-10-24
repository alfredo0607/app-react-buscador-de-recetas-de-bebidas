import React, { useContext } from "react";
import { BuscarRecetaContext } from "../context/BuscarReceta";
import MostrarCartas from "./MostrarCartas";

export default function Listar() {
  const { recetas } = useContext(BuscarRecetaContext);

  return (
    <div>
      {recetas.map((receta) => (
        <MostrarCartas key={receta.idDrink} receta={receta} />
      ))}
    </div>
  );
}
