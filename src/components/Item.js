import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({ id, title }) => {
  return (
    <>
      <ListGroup.Item
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {title}
        <Link to={'/detalle/' + id}>
          <Button variant="success">Ver Detalle</Button>
        </Link>
      </ListGroup.Item>
    </>
  );
};

export default Item;