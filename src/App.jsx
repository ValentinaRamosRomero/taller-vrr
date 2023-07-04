import Inicio from "./components/Inicio";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [autenticado, setAutenticado] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setAutenticado={setAutenticado} />} />
        <Route
          path="/inicio"
          element={
            <ProtectedRoute autenticado={autenticado}>
              <Inicio />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
