import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import DataReseauxLogo from '../../assets/DataReseaux-Logo-removebg.png'; // Importer le logo de DataReseaux

const Footer = () => {
    return (
        <footer className="footer">
            <div className="logo-container"> {/* Div pour le logo */}
                <img className="data-reseaux-logo" src={DataReseauxLogo} alt="DataReseaux Logo" />
            </div>
            <div className="contact-map-container">
                <div className="contact-info">
                    <h3><span className="data">Contact</span> Information</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faEnvelope} /><span className="data"> Email : </span> support@datareseaux.com</li>
                        <li><FontAwesomeIcon icon={faPhone} /> <span className="data">  Phone : </span> Phone: +2125-22-44-72-68</li>
                        <li><FontAwesomeIcon icon={faMapMarkerAlt} /> <span className="data"> Address : </span> 12 Rte Ouled Ziane 4° Etage N8 - Casablanca 20100, Maroc</li>
                    </ul>
                </div>
                <div className="map">
                    {/* Intégrer votre carte ici, par exemple avec Google Maps */}
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.6425493405995!2d-7.601847199999999!3d33.588629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd6637b55d7f%3A0x3d87aab0b0e34c1a!2sData%20Reseaux!5e0!3m2!1sfr!2sru!4v1715763078574!5m2!1sfr!2sru"
                        width="150%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <div className="copyright"> {/* Div pour les droits d'auteur */}
                <p>&copy; {new Date().getFullYear()} <span className="data"> DataReseaux </span>. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
