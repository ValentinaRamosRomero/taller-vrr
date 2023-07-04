import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const { Header, Body, Img } = Card;

function Detail({ idSeleccionado }) {
  const [recetaSeleccionada, setRecetaSeleccionada] = useState({});
  const { title, summary, image, instructions } = recetaSeleccionada;

  const obtenerDetalle = () => {
    //Ajustar URL
    const url = new URL(
      `https://api.spoonacular.com/recipes/${idSeleccionado}/information`
    );
    url.searchParams.append("apiKey", process.env.REACT_APP_API_KEY);

    //Obtener información
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        setRecetaSeleccionada(resultado);
      })
      .catch((_) => {
        alert("error obteniendo datos");
      });
  };

  useEffect(() => {
    if (idSeleccionado) {
      obtenerDetalle();
    }
  }, [idSeleccionado]);

  return (
    <div>
      <Card border="primary" style={{ width: "100%" }}>
        <Header>DETALLES</Header>
        <Body>
          <Img variant="top" src={image} />
          <h1 border="primary">{title}</h1>
          <div
            border="primary"
            style={{ textAlign: "justify" }}
            dangerouslySetInnerHTML={{ __html: summary }}
          ></div>
          <div
            border="primary"
            dangerouslySetInnerHTML={{ __html: instructions }}
          ></div>
        </Body>
      </Card>
    </div>
  );
}

export default Detail;
