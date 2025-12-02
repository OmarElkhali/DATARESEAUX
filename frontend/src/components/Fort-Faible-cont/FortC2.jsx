import React from 'react'
import './FortC.css'
import tableauxElec from "../../assets/tableaux-elec.png"
import ondu from "../../assets/Ondulur.png";
import fortCi2Img from "../../assets/FortCi2.png"

const FortC2 = () => {
    return (
        <section className="FortC-warmp">
            <div className="FortC-Container">
                <div className="transformation">
                    <div className='transformation-title'>
                        <h1>TABLEAUX</h1>
                        <h1 className='data'>ÉLECTRIQUES</h1>
                    </div>
                    <div className="Trans-desc">
                        <span>Afin de garantir une bonne protection et une distribution parfaite de l'électricité,</span> 
                        <span>DATARESEAUX met à votre disposition une large gamme de tableaux électriques</span>
                        <span>prééquipés ou à équiper pour tous les types de bâtiments et des accessoires de marque</span>
                        <span>à prix réduits. Chaque coffret de répartition proposé vous garantit</span>
                        <span>une installation électrique optimale.</span>
                    </div>
                    <img src={tableauxElec} alt="Tableaux électriques" />
                </div>
                <div className="electrogene">
                    <div className='electrogene-title'>
                        <h1 className='data'>ONDULEURS</h1>
                    </div>
                    <div className="electrogene-desc">
                        <span><br/>DATARESEAUX offre à ses clients un large choix d'onduleurs leur</span> 
                        <span>garantissant une grande autonomie quelle que soit la contrainte. </span>
                        <span>Nous fournissons des onduleurs adaptés à vos besoins, ayant des utilisations variées</span>
                        <span>allant des home offices aux grandes installations industrielles. Nous vous proposons </span>
                        <span>ainsi une large gamme d'onduleurs de qualité vous assurant une protection</span>
                        <span> optimale contre toute panne de courant.</span>
                    </div>
                    <img src={ondu} alt="Onduleurs" />
                </div>
                <div className="FortCi">
                    <img src={fortCi2Img} alt="Courant fort" />
                </div>
            </div>
        </section>
    )
}

export default FortC2
