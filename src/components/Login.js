import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const autenticar = (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    const validacionUsuario = username.value !== '';
    const validacionPassword = password.value !== '';

    if (validacionUsuario && validacionPassword) {
      navigate('/listado');
      localStorage.setItem('user', username.value);
    } else {
      alert('Usuario o clave incorrecto');
    }
  };
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1> Welcome!</h1>
      <h2>API FOOD</h2>
      <Image
        src="https://geekflare.com/wp-content/uploads/2022/03/food-API.jpg"
        style={{ width: '40%', borderRadius: '20px' }}
      />
      <Form style={{ marginTop: '10px' }} onSubmit={autenticar}>
        <Form.Group className="mb-3" controlId="formBasicUser">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="user"
            name="username"
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
