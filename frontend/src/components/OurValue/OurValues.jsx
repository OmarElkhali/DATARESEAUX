import React, { useState } from 'react';
import './OurValues.css';
import bureau from '../../assets/bureau-c.png'
import { FaStar, FaBalanceScale, FaUserTie, FaBolt, FaSmile, FaGlobe } from 'react-icons/fa';

const OurValues = ({ searchTerm }) => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleValueClick = (value) => {
        if (selectedValue === value) {
            setSelectedValue(null);
        } else {
            setSelectedValue(value);
        }
    };

    const highlightText = (text, term) => {
        if (!term) return text;
        const parts = text.split(new RegExp(`(${term})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === term.toLowerCase() ? <mark key={index}>{part}</mark> : part
        );
    };

    const values = [
        {
            title: "QUALITÉ",
            icon: <FaStar className="value-icon" />,
            description: "Plus nous sommes précis et déterminés, meilleures sont nos chances de répondre aux attentes et aux enjeux de nos clients, et de leur proposer des solutions personnalisées. Notre objectif principal est le bon fonctionnement de votre projet. Nous élaborons un planning, des études nécessaires et mettons en place des procédés novateurs concernant la maintenance des dispositifs installés."
        },
        {
            title: "FIABILITÉ",
            icon: <FaBalanceScale className="value-icon" />,
            description: "Nous attachons une attention particulière à la qualité de nos services afin d’assurer une grande régularité de nos prestations. DATARESEAUX s’engage avec ses partenaires, afin de vous accompagner dans tous vos projets, ainsi que dans toutes les étapes, de l’étude à la réalisation. Nous vous apportons des solutions innovantes, tout en accordant la plus grande importance à l’économie de l’énergie et au respect de l’environnement."
        },
        {
            title: "COMPÉTENCE",
            icon: <FaUserTie className="value-icon" />,
            description: "Chez DATARESEAUX nous considérons chaque projet comme étant unique et nous prenons toutes les mesures nécessaires, afin de proposer des solutions diversifiées et adaptées aux besoins spécifiques de chaque projet. BUREAU D’ÉTUDE, CASABLANCA."
        },
        {
            title: "RÉACTIVITÉ",
            icon: <FaBolt className="value-icon" />,
            description: "Faites confiance à notre réseau pour vous apporter la réactivité et l’expertise dont vous avez besoin. Nous avons la capacité de fournir des ingénieurs/techniciens dans un laps de temps très court afin de résoudre toute difficulté rencontrée. Si vous avez des soucis nécessitant une attention urgente, appelez-nous et nous dirigerons votre contact vers le service concerné qui prendra en charge votre demande. Une grande partie de notre succès réside dans notre capacité à répondre aux besoins urgents de nos clients."
        },
        {
            title: "SATISFACTION",
            icon: <FaSmile className="value-icon" />,
            description: "Le client est au centre de nos préoccupations. Nous serons toujours donc à ses côtés afin de répondre à ses besoins, l’accompagner dans ses choix et personnaliser ses demandes. Malgré l’accroissement de la concurrence et la diversité des offres, nos clients restent fidèles vu la qualité de prestations et notre engagement pour la réussite de chaque projet."
        },
        {
            title: "EMPREINTE",
            icon: <FaGlobe className="value-icon" />,
            description: "Le succès de notre entreprise repose sur un ensemble de valeurs afin de répondre aux attentes et aux enjeux de nos clients. Pour ce faire, nous mettons au point des procédés performants, conformes aux plus hauts standards internationaux. Grâce à notre volonté et nos valeurs, nous avons réussi à gagner la confiance de nos clients, et à acquérir un savoir-faire et des compétences technologiques affirmées, en collaborant avec les meilleures entreprises et industries sur le plan national et international."
        }
    ];

    const filteredValues = values.filter(value => 
        value.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        value.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className={`our-values`}>
            <h2>NOS <span className='Val'>VALEURS</span></h2>
            <div className="values-container">
                {filteredValues.map((value, index) => (
                    <div className="value" key={index} onClick={() => handleValueClick(value.title)}>
                        {value.icon}
                        <h3>{highlightText(value.title, searchTerm)}</h3>
                        {selectedValue === value.title && (
                            <p>{highlightText(value.description, searchTerm)}</p>
                        )}
                    </div>
                ))}
            </div>
            <div className="bureau-image">
                <img src={bureau} alt="Bureau" />
            </div>
        </section>
    );
}

export default OurValues;
