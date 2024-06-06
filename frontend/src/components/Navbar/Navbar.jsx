import React, { useState } from 'react';
import './Navbar.css';
import logo_light from '../../assets/DataReseaux-Logo-removebg.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toogle_light from '../../assets/night.png';
import toogle_dark from '../../assets/day.png';

const Navbar = ({ theme, setTheme }) => {
    const [showNosServices, setShowNosServices] = useState(false);
    const [showConcernantNous, setShowConcernantNous] = useState(false);

    const toggleMode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <div className={`navbar ${theme}`}>
            <img src={logo_light} alt="" className='logo' />

            <div className='search-box'>
                <input type="text" placeholder='Search' />
                <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="" />
            </div>

            <ul>
                <li><a href="#our-values">NOS VALEURS</a></li>
                <li><a href="#empreinte">NOTRE EMPREINTE</a></li>
                <li 
                    onMouseEnter={() => setShowNosServices(true)} 
                    onMouseLeave={() => setShowNosServices(false)}
                >
                    NOS SERVICES
                    {showNosServices && (
                        <ul className="dropdown-vertical">
                            <li><a href="#serv">NOS SERVICES</a></li>
                            <li><a href="#fort">COURANT FORT</a></li>
                            <li><a href="#faible">COURANT FAIBLE</a></li>
                        </ul>
                    )}
                </li>
                <li 
                    onMouseEnter={() => setShowConcernantNous(true)} 
                    onMouseLeave={() => setShowConcernantNous(false)}
                >
                    CONCERNANT NOUS
                    {showConcernantNous && (
                        <ul className="dropdown-vertical">
                            <li><a href="#bureau-etude">BUREAU D'ETUDES</a></li>
                            <li><a href="#humain-l">MOYENS HUMAINS & EXPERTISE LOGICIELLE</a></li>
                            <li><a href="#securite">SECURITE et QUALITE</a></li>
                            <li><a href="#distributeur">DISTRIBUTEUR AGREE</a></li>
                            <li><a href="#reference">NOS REFERENCE</a></li>
                        </ul>
                    )}
                </li>
                <li><a href="#contacts">NOS CONTACTS</a></li>
            </ul>
        </div>
    );
};
export default Navbar;
