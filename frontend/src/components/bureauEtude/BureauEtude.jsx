import React from 'react'
import './BureauEtude.css'
import BureauEtudeImg from '../../assets/bureauEtude.png'

const BureauEtude = () => {
return (
    <section className="BEtude-warmp">
        <div className="BEtude-Container">
            <div className="BEtude">
                <div className='BEtude-title'>
                    <h1>BUREAU <span className="data"> D’ÉTUDES</span></h1>
                </div>
                <div className="BEtude-text">
                    <h4>DATARESEAUX DISPOSE D’UN BUREAU D’ÉTUDES POUR ACCOMPAGNER SES CLIENTS DEPUIS LA CONCEPTION À LA RÉALISATION DE LEURS PROJETS.</h4>
                </div>
                <div className="Trans-desc">
                    <ul className='ulll'>
                            <li className='lii'>> Analyse des besoins</li>
                            <li className='lii'>> étude de faisabilité et APS</li>
                            <li className='lii'>> Analyse technico-économique et budgétisation / Conception et réalisation</li>
                            <li className='lii'>> Cahier des charges</li>
                            <li className='lii'>> Avant-projets détaillés</li>
                            <li className='lii'>> Analyses fonctionnelles</li>
                            <li className='lii'>> Dossier d’exécution</li>
                            <li className='lii'>> Suivi en exécution</li>
                    </ul>
                </div>
                <div className="BEtude-text">
                    <h4>COMPÉTENCES SUR PLUSIEURS APPLICATIONS :</h4>
                </div>
                <h5 className="kteba">Industrie, tertiaire, agroalimentaire, énergie, santé,traitement d’eau...</h5>
            </div>
            <div className="BEtudeImg">
                <img src={BureauEtudeImg} alt="BureauEtudeImg" />
            </div>
        </div>
    </section>
    )
}

export default BureauEtude