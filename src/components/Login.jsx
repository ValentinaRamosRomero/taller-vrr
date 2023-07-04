import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";

const { Group, Label, Control } = Form;

const Login = ({ setAutenticado }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const autenticar = () => {
    const validacionUsuario = username !== "";
    const validacionPassword = password !== "";

    if (validacionUsuario && validacionPassword) {
      navigate("/inicio");
      setAutenticado(true);
    } else {
      alert("Usuario o clave incorrecto");
    }
  };
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1> ¡Bienvenido!</h1>
      <h2>API FOOD</h2>
      <Image
        src="https://geekflare.com/wp-content/uploads/2022/03/food-API.jpg"
        style={{width: "40%", borderRadius: "20px"}}
      />
      <Form style={{ marginTop: "10px" }}>
        <Group className="mb-3" controlId="formBasicUser">
          <Label>Username</Label>
          <Control
            type="user"
            placeholder="Enter username"
            onChange={(e) => {
              const usuarioDigitado = e.target.value;
              setUsername(usuarioDigitado);
            }}
          />
        </Group>

        <Group className="mb-3" controlId="formBasicPassword">
          <Label>Password</Label>
          <Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              const passwordDigitado = e.target.value;
              setPassword(passwordDigitado);
            }}
          />
        </Group>
        <Button variant="primary" type="submit" onClick={autenticar}>
          Log in
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
