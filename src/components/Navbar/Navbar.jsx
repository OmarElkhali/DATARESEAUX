import React from 'react';
import './Navbar.css';
import logo_light from '../../assets/DataReseaux-Logo-removebg.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toogle_light from '../../assets/night.png';
import toogle_dark from '../../assets/day.png';

const Navbar = ({ theme, setTheme }) => {
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
                <li>Our Value</li>
                <li>Services</li>
                <li>About us</li>
                <li>Contacts</li>
            </ul>
            <img onClick={() => toggleMode()} src={theme === 'light' ? toogle_light : toogle_dark} alt="" className='toogle-icon' />
        </div>
    );
};

export default Navbar;
