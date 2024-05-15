import React from 'react'
import './Fort.css'
import courantFort from '../../assets/faible2.png';

const Faible = () => {
    return (
        <section className={`Fort-wrappernn`}>
            <div className="Fort-container">
                <div className="image-Fort">
                <img src={courantFort} alt="courantFort"/>
                <div className='Fort-title'>
                    <h1>INSTALLATIONS ELECTRONIQUE</h1>
                    <h1 className='data-f'>COURANT FAIBLE</h1>
                        <ul className='ull'>
                            <li className='lii'>• SYSTÈME DE SÉCURITÉ INCENDIE & EXTINCTION AUTOMATIQUE</li>
                            <li className='lii'>• SÉCURITÉ (CONTRÔLE D’ACCÈS, VIDÉOSURVEILLANCE, INTRUSION)</li>
                            <li className='lii'>• PRÉCÂBLAGE INFORMATIQUE, TÉLÉPHONIE VDI </li>
                            <li className='lii'>• INTERPHONIE, SONORISATION, TÉLÉDISTRIBUTION</li>
                            <li className='lii'>• GESTION TECHNIQUE CENTRALISÉE GTC</li>
                            <li className='lii'>• CAMÉRA DE COMPTAGE</li>
                            <li className='lii'>• MAINTENANCE ET ASSISTANCE</li>
                        </ul>
                </div>
                </div>
            </div>
        </section>
    )
}
export default Faible;