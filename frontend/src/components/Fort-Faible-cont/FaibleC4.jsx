import React from 'react'
import './FortC.css'
import transformers  from "../../assets/tlfaza.png"
import FortCi from "../../assets/faiblec4.png"
    const FortC = () => {
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
                            <span>station de tête modulaire. Sa finalité est d’assurer la distribution vers un très grand</span>
                            <span>nombre d’usagers de programmes sonores ou visuels, et éventuellement d’autres</span>
                            <span>signaux : accèsinternet à très haut débit,téléphone, vidéo à la demande,TV analogique,IPTV, streaming IP.... </span>
                        </div>
                        <img src={transformers} alt="transformers"/>
                    </div>
                    <div className="FortCi3">
                        <img src={FortCi} alt="FortCi" />
                    </div>
                </div>
            </section>
        )
    }
export default FortC