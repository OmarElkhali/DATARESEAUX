import React from 'react';
import './ServiceSection.css';

/**
 * Reusable ServiceSection component for displaying service content
 * Used to replace FaibleC, FaibleC2, FaibleC3, FaibleC4, FortC, FortC2, FortC3 components
 */
const ServiceSection = ({
  sections = [],
  mainImage,
  mainImageAlt = 'Service image',
  mainImageClassName = 'FortCi',
  variant = 'default' // 'default', 'single', 'double'
}) => {
  return (
    <section className="FortC-warmp">
      <div className="FortC-Container">
        {sections.map((section, index) => (
          <div key={index} className={section.className || (index === 0 ? 'transformation' : 'electrogene')}>
            <div className={`${section.className || (index === 0 ? 'transformation' : 'electrogene')}-title`}>
              {section.title && <h1>{section.title}</h1>}
              {section.subtitle && <h1 className={section.subtitleClass || 'data-f'}>{section.subtitle}</h1>}
            </div>
            <div className={section.descriptionClass || (index === 0 ? 'Trans-desc' : 'electrogene-desc')}>
              {section.description.map((text, i) => (
                <span key={i}>{text}</span>
              ))}
            </div>
            {section.image && (
              <div className={section.imageWrapperClass || ''}>
                <img
                  src={section.image}
                  alt={section.imageAlt || 'Section image'}
                  className={section.imageClass || ''}
                />
              </div>
            )}
          </div>
        ))}
        {mainImage && (
          <div className={mainImageClassName}>
            <img src={mainImage} alt={mainImageAlt} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSection;
