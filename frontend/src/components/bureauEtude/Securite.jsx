import React from 'react'
import './BureauEtude.css'
import BureauEtudeImg from '../../assets/outils.png'
import safety from '../../assets/safety.png'

const Securite = () => {
return (
    <section className="BEtude-warmp">
        <div className="BEtude-Container">
            <div className="BEtude3">
                <div className='BEtude-title'>
                    <h1>SÉCURITÉ & <span className="data"> QUALITÉ</span></h1>
                </div>
                <div className="BEtude-text">
                    <h4>DOCUMENTS DE RÉFERENsCE</h4>
                </div>
                <div className="Trans-desc">
                    <ul className='ulll'>
                            <li className='lii'>> PAQ : Adapté à chaque projet</li>
                            <li className='lii'>> PHS : Adapté à chaque projet</li>
                            <li className='lii'>> Fiches métier</li>
                            <li className='lii'>> Method statement test</li>
                            <li className='lii'>> Fiche d’auto contrôle</li>
                    </ul>
                </div>
                <div className="BEtude-text">
                    <h4>MATÉRIEL DE QUALITÉ</h4>
                </div>
                <div className="Trans-desc">
                    <ul className='ulll'>
                            <li className='lii'>> Valise caméra infrarouge thermique</li>
                            <li className='lii'>> Analyseur de tension</li>
                            <li className='lii'>> Valise d’essai des protections différentielles</li>
                            <li className='lii'>> Multi-test</li>
                            <li className='lii'>> Banc d’essai tableau électrique</li>
                            <li className='lii'>> Multi-métres</li>
                            <li className='lii'>> Valise de certification</li>
                    </ul>
                </div>
            </div>
            <div className="BEImg">
                <img className="safety" src={safety} alt="safety"/>
                <img className="BEtudeImg3" src={BureauEtudeImg} alt="BureauEtudeImg" />
            </div>
        </div>
    </section>
    )
}
export default Securite