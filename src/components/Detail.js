import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { selectRecipeItem, fetchItem } from '../redux/recipesSlice';
import { useParams, useNavigate } from 'react-router-dom';

function Detail() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { item: recetaSeleccionada, status } = useSelector(selectRecipeItem);
  const { title, summary, image, instructions } = recetaSeleccionada;

  useEffect(() => {
    dispatch(fetchItem(id));
  }, []);

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: 'auto' }}>
      <Card style={{ width: '100%' }}>
        <Button variant="primary" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Card.Header>Detail</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={image} />
          <h1>{title}</h1>
          <div
            style={{ textAlign: 'justify' }}
            dangerouslySetInnerHTML={{ __html: summary }}
          ></div>
          <div dangerouslySetInnerHTML={{ __html: instructions }}></div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Detail;
