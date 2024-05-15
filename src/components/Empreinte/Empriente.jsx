import React from 'react'
import './Empriente.css'
import { IoFingerPrintOutline } from "react-icons/io5";
import MapImg from  '../../assets/maps.png';
import ONEP from  '../../assets/ONEP-Logo.png';
import Marjane from  '../../assets/Marjane-Logo.png';
import Ministere from  '../../assets/ministère-Logo.png';
import CountUp from 'react-countup';


const Empriente = ({ theme }) => {
    return (

    <section className={`Empriente-wrappernn ${theme}`}>
        <div class="Empriente-container">
            <div className="flexContainer Empreinte-right">
                <div className="image-map">
                    <img src={MapImg} alt="Map" width="550" height="auto"/>
                </div>
            </div>
            <div>
            <span className="icon-Empriente"><IoFingerPrintOutline /></span>
            </div>
            <div className="flexContainer Empriente-left">
            <div className='Empriente-title'>
                        <h1><span className="data">NOTRE </span><span className="reseaux"> EMPREINTE</span></h1>
                    </div>
                    <div className='Empreinte-des'>
                        <span>Notre entreprise a réussi à acquérir une grande expérience dans le</span> 
                        <span>domaine de l’énergie. Nous utilisons les techniques les plus avancées,</span>
                        <span>nous permettant ainsi de collaborer avec les meilleures entreprises sur le plan </span>
                        <span>national et international. La satisfaction de nos clients est au centre de nos préoccupations,</span>
                        <span>c’est pour cela que nous veillons à assurer des prestations de qualité.</span>
                    </div>
            </div>
            <div className="flexColStart-Empriente">
                            <div className="flexColStart-Emp">
                                <div className="LogoEMP">
                                    <img src={ONEP} alt="ONEP" />
                                </div>
                                <div className="description"> 
                                <div className="textD">                    
                                    <span className='text'>UN PARTENARIAT</span>
                                    <span className='text'><span className="data"> ECOLOGIQUE </span> & <span className="data"> DURABLE </span></span>
                                </div> 
                                </div>
                            </div>

                            <div className="flexColStart-Emp">
                                <div className="LogoEMP-M">
                                    <img src={Marjane} alt="Marjan" />
                                </div>
                                <div className="description">
                                <span className='count-E'> 
                                    <span className="plus">+</span>
                                    <CountUp start={2} end={25} duration={3} />
                                    <span className='ANS'>ANS</span>
                                </span>
                                <div className="textD">                    
                                    <span className='text'>FIDILISATION</span>
                                </div> 
                                </div>
                            </div>

                            <div className="flexColStart-Emp">
                                <div className="LogoEMP-Mi">
                                    <img src={Ministere} alt="Ministere" />
                                </div>
                                <div className="description">
                                <span className='count-E'> 
                                    <span className="plus">+</span>
                                    <CountUp start={500} end={1400} duration={3} /> 
                                </span>
                                <div className="textD">
                                <span className='text'>ETABLISSEMENT</span>
                                </div>
                                </div>
                            </div>
                    </div>
        </div>
    </section>
    )
}

export default Empriente