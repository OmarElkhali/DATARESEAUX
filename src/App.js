import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import OurValues from './components/Companies/OurValues';
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

const App = () => {
  const current_theme = localStorage.getItem('current-theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem("current-theme", theme);
  }, [theme]);

  return (
    <div className='app'>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero theme={theme} />
      </div>
        <OurValues />
        <Empriente />
        <Serv />
        <Activite />
        <Fort />
        <FortC />
        <FortC2 />
        <FortC3 />
        <Faible />
        <FaibleC />
        <FaibleC2 />
        <FaibleC3 />
        <FaibleC4 />
        <BureauEtude />
        <HumainL />
        <Securite />
        <Distributeur />
        <Industrie />
        <Infrastructure />
        <Footer />
    </div>
  );
}

export default App;
