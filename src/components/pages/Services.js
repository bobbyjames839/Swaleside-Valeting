import React, { useState } from 'react';
import '../styles/other_styling/Services.css';
import { useNavigate } from 'react-router-dom';
import image7 from '../images/image7.jpg';
import image11 from '../images/image11.jpg';
import image14 from '../images/image14.jpg';

export const Services = () => {
  const [openSection, setOpenSection] = useState('Maintenance');

  const navigate = useNavigate();

  const handleButtonClick = (section) => {
    setOpenSection(section);
  };

  const ServiceSection = ({ image, title, desc, price, classs }) => {
    return (
      <div className='service_content'>
        <div className='service_content_image_wrapper'>
          <img src={image} alt={title} className='service_content_image' />
        </div>

        <div className={`service_content_inner ${classs}`}>
          <h3 className='service_inner_title'>{title}</h3>
          <p className='service_inner_desc'>{desc}</p>
          <p className='service_inner_price'>{price}</p>
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
        <h3 className='section_subtitle'>We offer a variety of mobile valeting services.</h3>
      </div>

      <div className='service_buttons'>
        <button 
          className={`service_page_button ${openSection === 'Maintenance' ? 'active_service_button' : ''}`}
          onClick={() => handleButtonClick('Maintenance')}
        >
          Maintenance
        </button>
        <button 
          className={`service_page_button ${openSection === 'Deep Clean' ? 'active_service_button' : ''}`}
          onClick={() => handleButtonClick('Deep Clean')}
        >
          Deep Clean
        </button>
        <button 
          className={`service_page_button ${openSection === 'Ceramic Protection' ? 'active_service_button' : ''}`}
          onClick={() => handleButtonClick('Ceramic Protection')}
        >
          Ceramic Protection
        </button>
      </div>

      {openSection === 'Maintenance' && (
        <ServiceSection
          image={image7}
          title='Maintenance'
          desc={
            <>
              <p>Our Maintenance service is designed for car owners who want to keep their vehicles in top condition throughout the year. We begin with a thorough exterior wash, using pH-neutral shampoos that effectively remove dirt and contaminants without harming your car’s paintwork.</p>
              <br></br>
              <p>After the wash, we meticulously clean the wheels, ensuring that all traces of brake dust and road grime are removed. Inside, we vacuum every inch of the cabin, reaching even the hardest-to-access areas like under the seats and in the boot. We also clean all glass surfaces for optimal visibility.</p>
              <br></br>
              <p>To finish, we treat all interior plastics and trim with a high-quality protective solution that guards against UV damage and fading. This service is ideal for regular upkeep, helping to preserve your car’s value and ensuring it remains in excellent condition.</p>
            </>
          }
          price='From £100'
          classs='service_content_inner_maintenance'
        />
      )}

      {openSection === 'Deep Clean' && (
        <ServiceSection
          image={image14}
          title='Deep Clean'
          desc={
            <>
              <p>Our Deep Clean service is the ultimate solution for vehicles that need a comprehensive cleaning, both inside and out. We start with a pre-wash to loosen dirt, followed by a meticulous hand wash that ensures every part of your car’s exterior is spotless, including those hard-to-reach areas like door jambs and wheel arches.</p>
              <br></br>
              <p>Once the exterior is gleaming, we deep vacuum all carpets, seats, and upholstery, effectively removing dirt and allergens. We also provide a deep shampoo treatment for fabric seats and carpets, while leather surfaces are cleaned and conditioned to restore their natural shine.</p>
              <br></br>
              <p>Additionally, we sanitize all high-touch areas such as the steering wheel, gear shift, and door handles, ensuring your car is not only clean but also hygienic. This service is perfect for vehicles that need a comprehensive refresh.</p>
            </>
          }
          price='From £150'
          classs='service_content_inner_deep'
        />
      )}

      {openSection === 'Ceramic Protection' && (
        <ServiceSection
          image={image11}
          title='Ceramic Protection'
          desc={
            <>
              <p>Our Ceramic Protection service offers the latest in car care technology, providing a durable and long-lasting shield for your vehicle’s paintwork. We begin by thoroughly decontaminating the paint surface to remove any impurities, followed by a machine polish that enhances the gloss and removes minor imperfections.</p>
              <br></br>
              <p>Once the surface is prepared, we apply a high-quality ceramic coating that bonds with the paint, creating a protective layer that is resistant to UV rays, chemicals, and environmental pollutants. This coating also has hydrophobic properties, making your car easier to clean as dirt and water bead off the surface.</p>
              <br></br>
              <p>The result is a high-gloss, mirror-like finish that enhances the color and depth of your vehicle’s paint. This service is ideal for car enthusiasts who want to maintain the showroom look of their vehicle with minimal maintenance.</p>
            </>
          }
          price='From £200'
          classs='service_content_inner_ceramic'
        />
      )}
    </div>
  );
};
