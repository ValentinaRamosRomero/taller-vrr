import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const Item = ({ titulo, setIdReceta, id }) => {
  const verDetalle = () => {
    setIdReceta(id);
  };
  return (
    <>
      <ListGroup.Item
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {titulo}
        <Button variant="success" onClick={verDetalle}>Ver Detalle</Button>
      </ListGroup.Item>
    </>
  );
};

export default Item;
