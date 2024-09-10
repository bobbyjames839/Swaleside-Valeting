import React, { useState } from 'react';
import '../styles/other_styling/Services.css';
import { useNavigate } from 'react-router-dom';
import image7 from '../images/main/image7.jpg';
import image11 from '../images/main/image11.jpg';
import image14 from '../images/main/image14.jpg';

export const Services = () => {
  const [openSection, setOpenSection] = useState('Detailing');

  const navigate = useNavigate();

  const handleButtonClick = (section) => {
    setOpenSection(section);
  };

  const ServiceSection = ({ image, title, desc, classs }) => {
    return (
      <div className='service_content'>
        <div className='service_content_image_wrapper'>
          <img src={image} alt={title} className='service_content_image' />
        </div>

        <div className={`service_content_inner ${classs}`}>
          <h3 className='service_inner_title'>{title}</h3>
          <p className='service_inner_desc'>{desc}</p>
          <button className='service_inner_button' onClick={() => navigate('/contact')}>
            Enquire Today
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="services">
      <div className='services_open'>
        <h1 className='section_title'>Our Services</h1>
        <h3 className='section_subtitle'>We offer a variety of mobile / unit-based services.</h3>
      </div>

      <div className='service_buttons'>
        <button 
          className={`service_page_button ${openSection === 'Detailing' ? 'active_service_button' : ''}`}
          onClick={() => handleButtonClick('Detailing')}
        >
          Detailing
        </button>
        <button 
          className={`service_page_button ${openSection === 'Valeting' ? 'active_service_button' : ''}`}
          onClick={() => handleButtonClick('Valeting')}
        >
          Mobile Valeting
        </button>
        <button 
          className={`service_page_button ${openSection === 'Ceramic Protection / Paint Protection' ? 'active_service_button' : ''}`}
          onClick={() => handleButtonClick('Ceramic Protection / Paint Protection')}
        >
          Ceramic Protection 
        </button>
      </div>

      {openSection === 'Detailing' && (
        <ServiceSection
          image={image7}
          title='Detailing'
          desc={
            <>
              <p>Our Car Detailing service provides meticulous care, ensuring every inch of your vehicle is spotless. We handle everything from the exterior wash to the interior deep clean, leaving your car looking and feeling brand new.</p>
              <br></br>
              <p>We meticulously clean the wheels, ensuring that all traces of brake dust and road grime are removed. Inside, we vacuum every inch of the cabin, reaching even the hardest-to-access areas like under the seats and in the boot. We also clean all glass surfaces for optimal visibility.</p>
              <br></br>
              <p>To finish, we treat all interior plastics and trim with a high-quality protective solution that guards against UV damage and fading. This service is ideal for maintaining the showroom condition of your car.</p>
            </>
          }
          classs='service_content_inner_detailing'
        />
      )}

      {openSection === 'Valeting' && (
        <ServiceSection
          image={image14}
          title='Valeting'
          desc={
            <>
              <p>Our Valeting service offers comprehensive care for your vehicle, including both interior and exterior cleaning. We pay attention to every detail, ensuring your car is clean, fresh, and ready for the road.</p>
              <br></br>
              <p>This service includes a thorough exterior wash, detailed cleaning of the wheels, and a full interior vacuum. We also clean all windows and mirrors for optimal visibility, leaving your car looking and feeling immaculate.</p>
              <br></br>
              <p>Ideal for those who want their vehicle to look its best, our valeting service ensures your car is maintained to a high standard.</p>
            </>
          }
          classs='service_content_inner_valeting'
        />
      )}

      {openSection === 'Ceramic Protection / Paint Protection' && (
        <ServiceSection
          image={image11}
          title='Ceramic Protection / Paint Protection'
          desc={
            <>
              <p>Our Ceramic Protection and Paint Protection service offers the latest in car care technology, providing a durable and long-lasting shield for your vehicle’s paintwork. We begin by thoroughly decontaminating the paint surface to remove any impurities, followed by a machine polish that enhances the gloss and removes minor imperfections.</p>
              <br></br>
              <p>Once the surface is prepared, we apply a high-quality ceramic coating that bonds with the paint, creating a protective layer that is resistant to UV rays, chemicals, and environmental pollutants. This coating also has hydrophobic properties, making your car easier to clean as dirt and water bead off the surface.</p>
              <br></br>
              <p>The result is a high-gloss, mirror-like finish that enhances the color and depth of your vehicle’s paint. This service is ideal for car enthusiasts who want to maintain the showroom look of their vehicle with minimal maintenance.</p>
            </>
          }
          classs='service_content_inner_ceramic'
        />
      )}
    </div>
  );
};
