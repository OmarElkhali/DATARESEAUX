import React from 'react'
import './FortC.css'
import cam from "../../assets/cam.png"
import sona from "../../assets/sona.png";
import faibleC2Img from "../../assets/FaibleC2.png"

const FaibleC2 = () => {
    return (
        <section className="FortC-warmp">
            <div className="FortC-Container">
                <div className="transformation">
                    <div className='transformation-title'>
                        <h1>INTERPHONIE</h1>
                        <h1 className='data-f'>& VIDÉOPHONIE</h1>
                    </div>
                    <div className="Trans-desc">
                        <span>DATARESEAUX met à votre disposition les systèmes les plus performants alliant design</span> 
                        <span>et qualité. Tous nos produits sont dotés des dernières technologies dans le domaine</span>
                        <span>de la vidéosurveillance. Nous veillons ainsi à perpétuer notre réputation d'excellence</span>
                        <span>et de qualité. Chaque mouvement, scène, véhicule et visage peut être reconnu grâce</span>
                        <span>à un système intelligent qui peut être appliqué à la vidéo en direct ou à la lecture.</span>
                    </div>
                    <img src={cam} alt="Interphonie et vidéophonie" />
                </div>
                <div className="electrogene">
                    <div className='electrogene-title'>
                        <h1> SONORISATION &</h1>
                        <h1 className='data-f'>VIDÉOCONFÉRENCE</h1>
                    </div>
                    <div className="electrogene-desc">
                        <span>Ce système vous permet la diffusion d'un contenu audio et d'assurer vos services</span> 
                        <span>d'ambiance. Il permet également d'informer le public et de garantir la communication.</span>
                        <span>Étant directement relié à votre centrale d'incendie, ce système vous assurera</span>
                        <span>l'avertissement du public de manière audible et ciblée. Il est donc particulièrement</span>
                        <span>utile dans les situations d'urgences, permettant ainsi la mise en sécurité et l'évacuation</span>
                        <span>des lieux dans les plus brefs délais.</span>
                    </div>
                    <img src={sona} alt="Sonorisation et vidéoconférence" />
                </div>
                <div className="FaibleCi">
                    <img src={faibleC2Img} alt="Courant faible" />
                </div>
            </div>
        </section>
    )
}

export default FaibleC2
