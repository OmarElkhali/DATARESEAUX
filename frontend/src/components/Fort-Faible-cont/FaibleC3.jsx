import React from 'react'
import './FortC.css'
import transformers  from "../../assets/lambda.png"
import elecc from  "../../assets/lambda2.png"
import FortCi from "../../assets/FaibleCi3.png"
    const FortC = () => {
        return (
            <section className="FortC-warmp">
                <div className="FortC-Container">
                    <div className="transformation">
                        <div className='transformation-title'>
                            <h1>SYSTÈME DE</h1>
                            <h1 className='data-f'>VIDÉOSURVEILLANCE</h1>
                        </div>
                        <div className="Trans-desc">
                            <span>Chez DATARESEAUX, nous saurons vous suggérer un ensemble de solutions </span> 
                            <span>personnalisées pour répondre à vos demandes. Les technologies utilisées s’adaptent</span>
                            <span>aux exigences fonctionnelles et au style architectural : maison individuelle, résidence,commerce...</span>
                            <span>Les produits que nous vous proposons sont parfaitement adaptables à tous les </span>
                            <span>scénarios d’installation, afin de vous garantir les meilleurs résultats.</span>
                        </div>
                        <img className='lambda2' src={transformers} alt="transformers" />
                    </div>
                    <div className="electrogene">
                        <div className='electrogene-title'>
                            <h1>CONTRÔLE D’ACCÈS</h1>
                            <h1 className='data-f'>COULOIR RAPIDE</h1>
                        </div>
                        <div className="electrogene-desc">
                            <span>DATARESEAUX vous permet de gérer efficacement les accès, grâce à un ensemble</span> 
                            <span>de produits alliant performance, qualité et facilité d’utilisation. Ces équipements </span>
                            <span>diffèrent selon le type d’utilisation pour laquelle ils seront destinés. Un système de </span>
                            <span>contrôle d’accès vous permet de gérer les flux de personnes et de limiter l’accès à </span>
                            <span>certaines zones sensibles. Il permet également d’enregistrer les personnes et leurs</span>
                            <span>déplacements. Pour cela, nous mettrons à votre disposition des cartes ou des badges</span>
                            <span>sécurisés adossés à un dispositif de lecteurs associés, de serrures résistantes et </span>
                            <span>contrôlées par un logiciel facilement utilisable. DATARESEAUX se chargera de vous</span>
                            <span>intégrer ces systèmes quelle que soit leur complexité pour vous proposer une solution </span>
                            <span>optimale. Chacun de nos techniciens et commerciaux est à votre disposition pour vous </span>
                            <span>aider et vous conseiller à chaque étape du paramétrage de ces systèmes.</span>
                        </div>
                        <img src={elecc} alt="elecc" />
                    </div>
                    <div className="FaibleCi">
                        <img src={FortCi} alt="FortCi" />
                    </div>
                </div>
            </section>
        )
    }

export default FortC