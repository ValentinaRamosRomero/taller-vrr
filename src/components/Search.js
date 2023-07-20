import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { fetchList } from '../redux/recipesSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchList(e.target.elements.query.value));
  };

  return (
    <Container>
      <Form
        style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '10px',
        }}
        onSubmit={handleSearch}
      >
        <Form.Control
          id="query"
          name="query"
          type="text"
          placeholder="Search recipe"
        />
        <Button variant="primary" type="submit">
          Search
        </Button>
        <Button
          onClick={() => {
            localStorage.removeItem('user');
            navigate('/');
          }}
        >
          Logout
        </Button>
      </Form>
    </Container>
  );
};

export default Search;
