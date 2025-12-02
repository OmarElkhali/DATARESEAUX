import React from 'react'
import './FortC.css'
import eclerage from "../../assets/eclerage.png";
import fortCi3Img from "../../assets/FortCi3.png"

const FortC3 = () => {
    return (
        <section className="FortC-warmp">
            <div className="FortC-Container">
                <div className="electrogene">
                    <div className='electrogene-title'>
                        <h1 className='data'>ÉCLAIRAGE</h1>
                    </div>
                    <div className="electrogene-desc">
                        <span><br/>L'éclairage est parmi nos premiers atouts, il crée et conditionne votre ambiance,</span> 
                        <span>vos espaces, pour vous, vos clients, vos collaborateurs et vos projets. </span>
                        <span> Il est l'âme de votre bâtiment, et lui donne une personnalité, un cachet et un style.</span>
                        <span>Vos rêves, nous les partageons tous les jours, nous les concevons avec vous,</span>
                        <span>ils stimulent notre expertise et sont traduits en images, ici.</span>
                        <span>Depuis 25 ans, nous élargissons notre offre de produits, en investissant</span>
                        <span>dans les outils de conception les plus modernes, pour stimuler l'innovation,</span>
                        <span>et vous garantir toujours plus de services en matière d'information, de conseil et d'expertise.</span>
                    </div>
                    <div className="eclimg">
                        <img src={eclerage} alt="Éclairage"/>
                    </div>
                </div>
                <div className="FortCi3">
                    <img src={fortCi3Img} alt="Courant fort" />
                </div>
            </div>
        </section>
    )
}

export default FortC3
