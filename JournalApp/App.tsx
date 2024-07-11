// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Dashboard from './src/pages/Dashboard';
import NewEntry from './src/pages/NewEntry';
import EditEntry from './src/pages/EditEntry';

const App = () => {
  const [auth, setAuth] = useState(null);

  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/register" element={<Register setAuth={} />} />
        <Route path="/dashboard" element={<Dashboard auth={auth} />} />
        <Route path="/new-entry" element={<NewEntry auth={auth} />} />
        <Route path="/edit-entry/:id" element={<EditEntry auth={auth} />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
