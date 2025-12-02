import React from 'react'
import './FortC.css'
import inso from "../../assets/inso.png"
import intru from "../../assets/intru.png";
import faibleCImg from "../../assets/faibleC.png"

const FaibleC = () => {
    return (
        <section className="FortC-warmp">
            <div className="FortC-Container">
                <div className="transformation">
                    <div className='transformation-title'>
                        <h1>SÉCURITÉ INCENDIE &</h1>
                        <h1 className='data-f'>EXTINCTION AUTOMATIQUE</h1>
                    </div>
                    <div className="Trans-desc">
                        <span>Riche de son expérience, DATARESEAUX propose à ses clients de nombreux systèmes</span> 
                        <span>de détection d'incendie, garantissant le respect des différentes normes de sécurité.</span>
                        <span>Nos équipements vous assurent prévention et protection contre tous types d'incendies,</span>
                        <span>et cela dans tous types de bâtiments et propriétés.</span>
                        <span>Nos produits vous permettent de détecter tout départ d'incendie et de le prévenir</span>
                        <span>grâce à une signalisation sonore ou visuelle assurant une évacuation rapide des lieux.</span>
                    </div>
                    <img src={inso} alt="Sécurité incendie" />
                </div>
                <div className="electrogene">
                    <div className='electrogene-title'>
                        <h1 className='data-f'><br />INTRUSION</h1>
                    </div>
                    <div className="electrogene-desc">
                        <span>DATARESEAUX met à votre disposition une large gamme de produits filaires et sans fil.</span> 
                        <span>Nous proposons des solutions adaptées à vos besoins.</span>
                        <span>DATARESEAUX vous garantit des systèmes d'alarme anti-intrusion sophistiqués, dotés</span>
                        <span>de larges possibilités de personnalisation, d'une grande facilité d'utilisation, d'une</span>
                        <span>haute performance et un design adaptable à chaque environnement.</span>
                    </div>
                    <img src={intru} alt="Système anti-intrusion" />
                </div>
                <div className="FaibleCi">
                    <img src={faibleCImg} alt="Courant faible" />
                </div>
            </div>
        </section>
    )
}

export default FaibleC
