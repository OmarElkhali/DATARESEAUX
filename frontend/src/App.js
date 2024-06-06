import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import OurValues from './components/OurValue/OurValues';
import Empriente from './components/Empreinte/Empriente';
import Serv from './components/Serv/Serv';
import Activite from './components/Activite/Activite';
import Fort from './components/Courant-Fort-Faible/Fort';
import FortC from './components/Fort-Faible-cont/FortC';
import FaibleC from './components/Fort-Faible-cont/FaibleC';
import FaibleC2 from './components/Fort-Faible-cont/FaibleC2';
import FaibleC3 from './components/Fort-Faible-cont/FaibleC3';
import FaibleC4 from './components/Fort-Faible-cont/FaibleC4';
import FortC2 from './components/Fort-Faible-cont/FortC2';
import FortC3 from './components/Fort-Faible-cont/FortC3';
import Faible from './components/Courant-Fort-Faible/Faible';
import BureauEtude from './components/bureauEtude/BureauEtude';
import HumainL from './components/bureauEtude/HumainL';
import Securite from './components/bureauEtude/Securite';
import Distributeur from './components/bureauEtude/Distributeur';
import Industrie from './components/reference/Industrie';
import Infrastructure from './components/reference/Infrastructure';
import Footer from './components/Footer/Footer';
import ReferenceAdmin from './components/referenceadmin/ReferenceAdmin';
import Login from './components/Login/Login';

export const AuthContext = React.createContext();

const App = () => {
  const current_theme = localStorage.getItem('current-theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    localStorage.setItem("current-theme", theme);
  }, [theme]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:3001/checkAuth', { withCredentials: true });
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        <AppContent theme={theme} setTheme={setTheme} />
      </Router>
    </AuthContext.Provider>
  );
}

const AppContent = ({ theme, setTheme }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin';
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      {!isAdminRoute && (
        <div className={`container ${theme}`}>
          <Navbar theme={theme} setTheme={setTheme} />
          <Hero theme={theme} />
        </div>
      )}
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={isAuthenticated ? <ReferenceAdmin /> : <Navigate to="/login" />}
          />
          {/* Autres routes */}
          <Route path="/" element={
            <>
              <section id="our-values">
                <OurValues />
              </section>
              <section id="empreinte">
                <Empriente />
              </section>
              <section id="serv">
                <Serv />
              </section>
              <section id="activite">
                <Activite />
              </section>
              <section id="fort">
                <Fort />
              </section>
              <section id="fort-c">
                <FortC />
              </section>
              <section id="fort-c2">
                <FortC2 />
              </section>
              <section id="fort-c3">
                <FortC3 />
              </section>
              <section id="faible">
                <Faible />
              </section>
              <section id="faible-c">
                <FaibleC />
              </section>
              <section id="faible-c2">
                <FaibleC2 />
              </section>
              <section id="faible-c3">
                <FaibleC3 />
              </section>
              <section id="faible-c4">
                <FaibleC4 />
              </section>
              <section id="bureau-etude">
                <BureauEtude />
              </section>
              <section id="humain-l">
                <HumainL />
              </section>
              <section id="securite">
                <Securite />
              </section>
              <section id="distributeur">
                <Distributeur />
              </section>
              <section id="industrie">
                <Industrie />
              </section>
              <section id="infrastructure">
                <Infrastructure />
              </section>
            </>
          } />
        </Routes>
      </div>
      {!isAdminRoute && (
        <div className={`container ${theme}`}>
          <Footer theme={theme} />
        </div>
      )}
    </>
  );
}

export default App;
