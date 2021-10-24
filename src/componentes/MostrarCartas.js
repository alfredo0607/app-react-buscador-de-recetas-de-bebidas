/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import { ModelContext } from "../context/Model";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    overflow: "scroll",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 2),
    height: "96%",
    display: "block",
  },
}));

export default function MostrarCartas({ receta }) {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { guardarReceta, setid, setguardarReceta } = useContext(ModelContext);

  const mostrarIngredientes = (guardarReceta) => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (guardarReceta[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {" "}
            {guardarReceta[`strIngredient${i}`]}{" "}
            {guardarReceta[`strMeasure${i}`]}
          </li>
        );
      }
    }

    return ingredientes;
  };
  return (
    <div className="contenedor-1">
      <div className="contenedor-2">
        <div id="product-card">
          <div id="product-front">
            <div class="shadow"></div>
            <img
              src={receta.strDrinkThumb}
              alt={`Imagen de ${receta.strDrink}`}
            />
            <div class="image_overlay"></div>
            <div id="view_details">{receta.strDrink}</div>
            <button
              onClick={() => {
                setid(receta.idDrink);
                handleOpen();
              }}
            >
              Buscar Bebida
            </button>

            <Modal
              open={open}
              onClose={() => {
                setid(null);
                setguardarReceta({});
                handleClose();
              }}
            >
              <div style={modalStyle} className={classes.paper}>
                <h3>{guardarReceta.strDrink}</h3>
                <h4 className="mt-4">Instrucciones</h4>
                <p className="descripcion">{guardarReceta.strInstructions}</p>

                <img
                  className="img-fluid my-4"
                  src={guardarReceta.strDrinkThumb}
                />

                <h4 className="ingredientes">Ingredientes y cantidades</h4>
                <ul className="lista">{mostrarIngredientes(guardarReceta)}</ul>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
