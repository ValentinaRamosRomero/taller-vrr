import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Item from "./Item";

const Listado = ({ setIdReceta }) => {
  const [listado, setListado] = useState([]);

  const obtenerRecetas = () => {
    //Ajustar URL
    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
    url.searchParams.append("query", "pasta");
    url.searchParams.append("apiKey", process.env.REACT_APP_API_KEY);

    //Obtener información
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        setListado(resultado.results);
      })
      .catch((_) => {
        alert("error obteniendo datos");
      });
  };

  useEffect(() => {
    obtenerRecetas();
  }, []);

  const listadoJsx = listado.map((receta) => (
    <Item
      titulo={receta.title}
      key={receta.id}
      setIdReceta={setIdReceta}
      id={receta.id}
    />
  ));

  return (
    <div>
      <h4>LISTADO </h4>
      <ListGroup>{listadoJsx}</ListGroup>
    </div>
  );
};

export default Listado;

/*
  const listadoJsx = [];
  for (let index = 0; index < listado.length; index++) {
    const receta = listado[index];
    const item = <Item titulo={receta.titulo}/>;
    listadoJsx.push(item);
  }
  */

/*
  {
    id: 654959,
    title: "Pasta With Tuna",
    image: "https://spoonacular.com/recipeImages/654959-312x231.jpg",
    imageType: "jpg",
    nutrition: {
      nutrients: [
        {
          name: "Fat",
          amount: 10.3185,
          unit: "g",
        },
      ],
    },
  }

  <Item titulo={receta.title} key={receta.id} seleccionarReceta={seleccionarReceta} ></Item>

  */
