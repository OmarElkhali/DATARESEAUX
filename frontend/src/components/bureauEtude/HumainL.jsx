import React from 'react'
import './BureauEtude.css'
import BureauEtudeImg2 from '../../assets/DT.png'

const HumainL = () => {
return (
    <section className="BEtude-warmp">
        <div className="BEtude-Container">
            <div className="BEtude2">
                <div className='BEtude2-title'>
                    <h1>MOYENS HUMAINS & </h1>
                    <h1 className="data">EXPERTISE LOGICIELLE</h1>
                </div>
                <div className="Trans-desc">
                    <ul className='ulll'>
                        <li className='lii'>> Directeurs </li>
                        <li className='lii'>> ingénieurs</li>
                        <li className='lii'>> administrateurs</li>
                        <li className='lii'>> Chefs de projets chantier</li>
                        <li className='lii'>> Dessinateurs projets</li>
                        <li className='lii'>> Secrétaires</li>
                        <li className='lii'>> Conducteurs de travaux</li>
                        <li className='lii'>> Techniciens et techniciens specialisés</li>
                    </ul>
                </div>
                <div className="BEtude-text">
                    <h4>LOGICIEL EXPERTISE : </h4>
                </div>
                <h5 className="kteba">Plusieurs logiciels pour analyse, mise en service et traitement des documents.</h5>
            </div>
            <div className="BEtudeImg2">
                <img src={BureauEtudeImg2} alt="BureauEtudeImg" />
            </div>
        </div>
    </section>
    )
}

export default HumainL