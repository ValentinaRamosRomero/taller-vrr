import React, { useState } from 'react';
import List from './components/List';
import Detail from './components/Detail';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/listado"
          element={
            <ProtectedRoute>
              <List />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detalle/:id"
          element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
