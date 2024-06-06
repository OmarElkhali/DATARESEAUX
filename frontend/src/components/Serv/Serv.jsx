import React from 'react';
import lamp from '../../assets/lamp-video.mp4';
import botom from '../../assets/fort.png'
import botom2 from '../../assets/faible.png'
import './Serv.css'; // Assurez-vous d'importer votre fichier CSS pour le thème

const Serv = ({ videoRef }) => {
    return (
        <section className={`Serv-wrappernn`}>
            <div className='Serv-title'>
                <h1><span className="data">NOS </span><span className="reseaux">SERVICES</span></h1>
            </div>
            <div className='Serv-container'>
                <div className="courant-fort">
                    <h1>Courant <span className="data"> Fort </span></h1>
                        <ul className='ull'>
                            <li className='lii'>Onduleurs</li>
                            <li className='lii'>Tableaux électriques TG BT & TD</li>
                            <li className='lii'>Tableaux industriels</li>
                            <li className='lii'>Cellules HTA</li>
                        </ul>
                            <img src={botom} alt='botom'/>
                </div>

                <div className="video-container">
                    <video ref={videoRef} src={lamp} type="video/mp4" autoPlay loop />
                </div>

                <div className="courant-faible">
                    <h1>Courant <span className="data"> Faible </span></h1>
                        <ul className='ull'>
                            <li className='lii'>Contrôle d'accès</li>
                            <li className='lii'>Sécurité incendie</li>
                            <li className='lii'>Comptage</li>
                            <li className='lii'>Système d'intrusion</li>
                            <li className='lii'>Vidéo-surveillance</li>
                            <li className='lii'>Sonorisation</li>
                        </ul>
                        <img src={botom2} alt='botom2'/>
                </div>
            </div>
        </section>
    );
}

export default Serv;
