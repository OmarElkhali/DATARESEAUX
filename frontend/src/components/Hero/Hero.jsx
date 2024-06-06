import React from 'react';
import './Hero.css'
import heroImage from '../../assets/hero-image.jpeg';
import CountUp from 'react-countup';
import { FaUserCheck } from "react-icons/fa";
import { LiaAwardSolid } from "react-icons/lia";
import { HiMiniUserGroup } from "react-icons/hi2";

const Hero = ({ theme }) => {
    return (
    <section className={`hero-wrappernn ${theme}`}>
        <div className='hero-container'>
        
                <div className='flexCenter hero-left'>
                        <div  className="image-container">
                        <img src={heroImage} alt= "Hero" /> {/* Utilisez l'importation de l'image */}
                        <div className="border-animation"></div>
                        </div>
                </div> 
                <div className='hero-right'>
                    <div  className='bleu-cercle'/>
                    <div className='hero-title'>
                        <h1><span className="data">Data</span><span className="reseaux">Reseaux</span></h1>
                    </div>
                    <div className='hero-des'>
                        <span> offre des solutions personnalisées pour les circuits électriques,</span> 
                        <span>garantissant qualité et conformité aux normes,</span>
                        <span>avec une équipe jeune et dynamique d’ingénieurs expérimentés.</span>
                    </div>
                    <div className="flexCenter state">
                        <div className="flexColStart stat">
                        <span className='count'> 
                            <span className="plus">+</span>
                            <CountUp start={100} end={500} duration={3} />
                            <span className="icon"><FaUserCheck /></span>
                        </span>                       
                        <span className='text'>CLIENTS SATISFAITS</span>
                        </div>

                        <div className="flexColStart stat">
                        <span className='count'> 
                            <span className="plus">+</span>
                            <CountUp start={5} end={25} duration={3} />
                            <span className='ANS'>ANS</span>
                            <span className="icon"><LiaAwardSolid /></span>
                        </span>                       
                        <span className='text'>AU SERVICE DE VOS PROJETS</span>
                        </div>

                        <div className="flexColStart stat-3">
                        <span className='count'> 
                            <span className="plus">+</span>
                            <CountUp start={20} end={50} duration={3} /> 
                            <span className="icon"><HiMiniUserGroup/></span>
                        </span>                       
                        <span className='text'>DIRECTEURS , CHEFS DE PROJETS,</span>
                        <span className='text'>INGÉNIEURS VEILLANT SUR VOS PROJETS</span>
                        </div>
                    </div>
                </div>           
        </div>
    </section>
    )
}

export default Hero