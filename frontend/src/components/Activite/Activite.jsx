import React from 'react'
import Industrie from '../../assets/Industrie.png'
import INFRASTRUCTURE from '../../assets/Infrastructure.png'
import Energie from '../../assets/energie-electrique.png'
import Ener2 from '../../assets/Ener2.jpg'
import Indus2 from '../../assets/Indus2.png'
import Infra2 from '../../assets/infra2.png'
import './Activite.css'

const Activite = () => {
  return (
    <section className={`Activite-wrappernn`}>
            <div className='Activite-title'>
                <h2><span className="data">SECTEURS </span><span className="reseaux">D'ACTIVITES</span></h2>
            </div>
        <div className="Activite-container">
            <div className='Activite-container'>
                <div className="INDUSTRIE">
                    <img className='icon-A' src={Industrie} alt='Industrie'/>
                    <h1>INDUS<span className="data">TRIE</span></h1>
                    <div className="exemples1">
                        <h3>Automobile</h3>
                        <h3>Pharmaceutique</h3>
                        <h3>Agroalimentaire</h3>
                    </div>
                    <img src={Indus2} alt="Indus2" className="im-A1" />
                </div>

                <div className="INFRASTRUCTURE">
                    <img className='icon-A' src={INFRASTRUCTURE} alt='INFRASTRUCTURE'/>
                    <h1>INFRASTRUC<span className="data">TURE</span></h1>
                    <div className="exemples2">
                        <h3>Enseignement</h3>
                        <h3>Centre Comerciaux</h3>
                        <h3>Hotel</h3>
                    </div>
                    <img src={Infra2} alt="Infra2" className="im-A2" />
                </div>

                <div className="ENERGIE">
                    <img className='icon-A' src={Energie} alt='Energie'/>
                    <h1>ENER<span className="data">GIE</span></h1>
                    <div className="exemples3">
                        <h3>Haut tension</h3>
                        <h3>Moyenne tension</h3>
                        <h3>Basse tension</h3>
                    </div>
                    <img src={Ener2} alt="Ener2" className="im-A3" />
                </div>
            </div>
        </div>
    </section>
)
}

export default Activite