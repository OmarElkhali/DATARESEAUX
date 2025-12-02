import React from 'react'
import './FortC.css'
import tlfaza from "../../assets/tlfaza.png"
import faiblec4Img from "../../assets/faiblec4.png"

const FaibleC4 = () => {
    return (
        <section className="FortC-warmp">
            <div className="FortC-Container">
                <div className="transformation">
                    <div className='transformation-title'>
                        <h1>SYSTÈME DE</h1>
                        <h1 className='data-f'>TÉLÉDISTRIBUTION</h1>
                    </div>
                    <div className="Trans-desc">
                        <span>DATARESEAUX offre une vaste gamme de modules de systèmes de télédistribution.</span> 
                        <span>Ces modules vous permettent de réaliser votre propre système de réception avec </span>
                        <span>station de tête modulaire. Sa finalité est d'assurer la distribution vers un très grand</span>
                        <span>nombre d'usagers de programmes sonores ou visuels, et éventuellement d'autres</span>
                        <span>signaux : accès internet à très haut débit, téléphone, vidéo à la demande, TV analogique, IPTV, streaming IP...</span>
                    </div>
                    <img src={tlfaza} alt="Télédistribution"/>
                </div>
                <div className="FortCi3">
                    <img src={faiblec4Img} alt="Courant faible" />
                </div>
            </div>
        </section>
    )
}

export default FaibleC4
