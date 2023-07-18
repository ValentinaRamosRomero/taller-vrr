import React, { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Item from './Item';
import { fetchList, selectRecipesList } from '../redux/recipesSlice';
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search';

const List = () => {
  const { items: listado, status } = useSelector(selectRecipesList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList('pasta'));
  }, []);

  const listadoJsx = listado.map((receta) => (
    <Item key={receta.id} {...receta} />
  ));

  const list =
    status === 'loading' ? (
      <p>Loading...</p>
    ) : (
      <ListGroup>{listadoJsx}</ListGroup>
    );
  return (
    <div
      style={{
        margin: 'auto',
        width: '800px',
      }}
    >
      <h4 style={{ textAlign: 'center' }}>List </h4>
      <Search />
      {list}
    </div>
  );
};

export default List;
