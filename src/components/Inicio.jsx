import React from "react";
import { useState } from "react";
import Listado from "./Listado";
import Detail from "./Detail";
import Container from "react-bootstrap/Container";

const Inicio = () => {
  const [idSeleccionado, setIdReceta] = useState();
  return (
    <Container style={{margin: "20px"}}>
      <Listado setIdReceta={setIdReceta} />
      <Detail idSeleccionado={idSeleccionado} />
    </Container>
  );
};

export default Inicio;
