// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EventDetails from "./pages/EventDetails";
import TeamPage from "./pages/TeamPage"; // Página da equipe


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
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

