import React from 'react'
import './FortC.css'
import transformers  from "../../assets/transformers.png"
import elecc from  "../../assets/elecc.png";
import FortCi from "../../assets/FortC.png"
    const FortC = () => {
        return (
            <section className="FortC-warmp">
                <div className="FortC-Container">
                    <div className="transformation">
                        <div className='transformation-title'>
                            <h1>POSTES DE</h1>
                            <h1 className='data'>TRANSFORMATION</h1>
                        </div>
                        <div className="Trans-desc">
                            <span>DATARESEAUX met à votre disposition des postes de transformation électriques permettant</span> 
                            <span>d’orienter l’électricité selon les besoins des consommateurs et les capacités</span>
                            <span>de transit des lignes électriques</span>
                            <span>Nos équipes vous accompagnent durant toute la procédure d’installation</span>
                            <span>et assurent la maintenance et l’entretien de ces équipements.</span>
                        </div>
                        <img src={transformers} alt="transformers" />
                    </div>
                    <div className="electrogene">
                        <div className='electrogene-title'>
                            <h1>GROUPES</h1>
                            <h1 className='data'>ÉLECTROGÈNES</h1>
                        </div>
                        <div className="electrogene-desc">
                            <span>DATARESEAUX vous propose des groupes électrogènes conformes aux normes </span> 
                            <span>internationales pour une haute efficacité et une faible consommation de carburant.</span>
                            <span>Nous disposons d’un large choix d’options, vous permettant ainsi d’installer</span>
                            <span>un groupe électrogène correspondant à votre application. </span>
                            <span>Tous nos produits installés sont certifiés et conformes au standards internationaux, </span>
                            <span>propres et économiques, même dans les conditions les plus exigeantes</span>
                        </div>
                        <img src={elecc} alt="elecc" />
                    </div>
                    <div className="FortCi">
                        <img src={FortCi} alt="FortCi" />
                    </div>
                </div>
            </section>
        )
    }

export default FortC