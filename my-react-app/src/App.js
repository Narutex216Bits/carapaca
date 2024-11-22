// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';  // Barra de navegação
import AboutUs from './pages/AboutUs'; // Página sobre nós
import Login from './pages/Login'; // Página de Login
import Dashboard from './pages/Dashboard'; // Página do Dashboard
import EventDetails from "./pages/EventDetails"; // Página dos eventos
import TeamPage from "./pages/TeamPage"; // Página da equipe
import Register from "./pages/Register"; // Página de registro


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* Aqui fica a Navbar sempre visível nas páginas, diferente do HTML */}
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/teams/:teamId" element={<TeamPage />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

