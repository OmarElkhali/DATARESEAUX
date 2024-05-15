import React from 'react'
import './Fort.css'
import courantFort from '../../assets/courantFort.png';

const Fort = () => {
    return (
        <section className={`Fort-wrappernn`}>
            <div className="Fort-container">
                <div className="image-Fort">
                    <img src={courantFort} alt="courantFort" />
                <div className='Fort-title'>
                    <h1>INSTALLATIONS ELECTRONIQUE</h1>
                    <h1 className='data'>COURANT FORT</h1>
                        <ul className='ull'>
                            <li className='lii'>• POSTES DE TRANSFORMATION </li>
                            <li className='lii'>• GROUPES ELECTROGENES</li>
                            <li className='lii'>• TABLEAUX ELECTRIQUE</li>
                            <li className='lii'>• ALIMENTATION GAINES PREFABRIQUEES ET CABLES</li>
                            <li className='lii'>• DISTRIBUTION ECLAIRAGE ET PRISES DE COURANT</li>
                            <li className='lii'>• ECLAIRAGE INDUSTRIEL, TRCHNIQUE ET DEB SECURITE</li>
                            <li className='lii'>• CONCEPTION, MONTAGE, ESSAI ET MISE EN SERVICE</li>
                            <li className='lii'>• RESEAUX ELECTRIQUES SECOURUS</li>
                            <li className='lii'>• MAINTENANCE & ASSISTANCE</li>
                        </ul>
                </div>
                </div>
            </div>
        </section>
    )
}
export default Fort;