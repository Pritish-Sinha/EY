import React, { FC } from 'react';
import r1Image from '../assets/r1.png';
import r2Image from '../assets/r2.png';

interface Section {
  header: string;
  imageUrl: string;
  paragraph_1: string;
  paragraph_2: string;
  buttonText: string;
  buttonHref: string;
}

const sections: Section[] = [
  {
    header: "EMEIA FSO",
    imageUrl: r1Image,
    paragraph_1: "Innovation",
    paragraph_2: "Designed to help apply innovation to our offerings, supporting EY to future-proof, stay relevant and be competitive.",
    buttonText: "Click Here to Explore",
    buttonHref: "#"
  },
  {
    header: "EUROPE WEST",
    imageUrl: r2Image,
    paragraph_1: "Innovation Team",
    paragraph_2: "Multidisciplinary and multicultural team which breathes innovation and works across all geographies, Service Lines and sectors to develop new technologies, strategies and solutions that can better position EY and our clients for the future.",
    buttonText: "Click here to Explore",
    buttonHref: "#"
  }
];

const Regions: FC = () => {
  return (
    <div className="regions">
      <div className="header-container">
        <h1>Regions</h1>
        <div className="line regions-line"></div>
      </div>
      {sections.map((section, index) => (
        <div key={index} className={`region-section ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
          <div className="regions-line above-header"></div>
          <div className="regions-image-container">
            <img src={section.imageUrl} alt={section.header} />
          </div>
          <div className="regions-text-container">
            <div className="regions-header-and-line">
              <h2>{section.header}</h2>
              <p className="regions-paragraph-1">{section.paragraph_1}</p>
            </div>
            <p className="regions-paragraph-2">{section.paragraph_2}</p>
            <a href={section.buttonHref} className="button">{section.buttonText}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Regions;
