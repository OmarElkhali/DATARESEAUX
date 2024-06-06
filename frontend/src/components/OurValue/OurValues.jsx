import React, { useState } from 'react';
import './OurValues.css';
import bureau from '../../assets/bureau-c.png'
import { FaStar, FaBalanceScale, FaUserTie, FaBolt, FaSmile, FaGlobe } from 'react-icons/fa'; // Importez les icônes nécessaires depuis react-icons

const OurValues = ({ theme }) => {
    // État local pour suivre la valeur sélectionnée
    const [selectedValue, setSelectedValue] = useState(null);

    // Fonction pour mettre à jour la valeur sélectionnée
    const handleValueClick = (value) => {
        if (selectedValue === value) {
            // Si la même valeur est cliquée à nouveau, désélectionnez-la
            setSelectedValue(null);
        } else {
            // Sinon, mettez à jour la valeur sélectionnée
            setSelectedValue(value);
        }
    };

    return (
        <section className={`our-values ${theme}`}>
            <h2>NOS <span className='Val'>VALEURS</span></h2>
            <div className="values-container">
                <div className="value" onClick={() => handleValueClick("QUALITÉ")}>
                    <FaStar className="value-icon" />
                    <h3>QUALITÉ</h3>
                    {selectedValue === "QUALITÉ" && (
                        <p>Plus nous sommes précis et déterminés, meilleures sont nos chances de répondre aux attentes et aux enjeux de nos clients, et de leur proposer des solutions personnalisées. Notre objectif principal est le bon fonctionnement de votre projet. Nous élaborons un planning, des études nécessaires et mettons en place des procédés novateurs concernant la maintenance des dispositifs installés.</p>
                    )}
                </div>
                <div className="value" onClick={() => handleValueClick ("FIABILITÉ")}>
                    <FaBalanceScale className="value-icon" />
                    <h3>FIABILITÉ</h3>
                    {selectedValue === "FIABILITÉ" && (
                        <p>Nous attachons une attention particulière à la qualité de nos services afin d’assurer une grande régularité de nos prestations. DATARESEAUX s’engage avec ses partenaires, afin de vous accompagner dans tous vos projets, ainsi que dans toutes les étapes, de l’étude à la réalisation. Nous vous apportons des solutions innovantes, tout en accordant la plus grande importance à l’économie de l’énergie et au respect de l’environnement.</p>
                    )}
                </div>
                <div className="value" onClick={() => handleValueClick("COMPÉTENCE")}>
                    <FaUserTie className="value-icon" />
                    <h3>COMPÉTENCE</h3>
                    {selectedValue === "COMPÉTENCE" && (
                        <p>Chez DATARESEAUX nous considérons chaque projet comme étant unique et nous prenons toutes les mesures nécessaires, afin de proposer des solutions diversifiées et adaptées aux besoins spécifiques de chaque projet. BUREAU D’ÉTUDE, CASABLANCA.</p>
                    )}
                </div>
                <div className="value" onClick={() => handleValueClick("RÉACTIVITÉ")}>
                    <FaBolt className="value-icon" />
                    <h3>RÉACTIVITÉ</h3>
                    {selectedValue === "RÉACTIVITÉ" && (
                        <p>Faites confiance à notre réseau pour vous apporter la réactivité et l’expertise dont vous avez besoin. Nous avons la capacité de fournir des ingénieurs/techniciens dans un laps de temps très court afin de résoudre toute difficulté rencontrée. Si vous avez des soucis nécessitant une attention urgente, appelez-nous et nous dirigerons votre contact vers le service concerné qui prendra en charge votre demande. Une grande partie de notre succès réside dans notre capacité à répondre aux besoins urgents de nos clients.</p>
                    )}
                </div>
                <div className="value" onClick={() => handleValueClick("SATISFACTION")}>
                    <FaSmile className="value-icon" />
                    <h3>SATISFACTION</h3>
                    {selectedValue === "SATISFACTION" && (
                        <p>Le client est au centre de nos préoccupations. Nous serons toujours donc à ses côtés afin de répondre à ses besoins, l’accompagner dans ses choix et personnaliser ses demandes. Malgré l’accroissement de la concurrence et la diversité des offres, nos clients restent fidèles vu la qualité de prestations et notre engagement pour la réussite de chaque projet.</p>
                    )}
                </div>
                <div className="value" onClick={() => handleValueClick("EMPREINTE")}>
                    <FaGlobe className="value-icon" />
                    <h3>EMPREINTE</h3>
                    {selectedValue === "EMPREINTE" && (
                        <p>Le succès de notre entreprise repose sur un ensemble de valeurs afin de répondre aux attentes et aux enjeux de nos clients. Pour ce faire, nous mettons au point des procédés performants, conformes aux plus hauts standards internationaux. Grâce à notre volonté et nos valeurs, nous avons réussi à gagner la confiance de nos clients, et à acquérir un savoir-faire et des compétences technologiques affirmées, en collaborant avec les meilleures entreprises et industries sur le plan national et international.</p>
                    )}
                </div>
                <div className='Bureu-etude'>
                    
                </div>
            </div>
            <div className="bureau-image">
                <img src={bureau} alt="" />
            </div>
        </section>
    );
}

export default OurValues;
