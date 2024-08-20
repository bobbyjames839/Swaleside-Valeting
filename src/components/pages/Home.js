import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home_styling/Home.css';
import serviceone from '../images/image2.jpg';
import servicetwo from '../images/image10.jpg';
import servicethree from '../images/image1.jpg'
import { BeforeAndAfterSection } from '../sections/home_sections/BeforeAndAfterSection';
import { Perks } from '../sections/home_sections/Perks';
import { Reviews } from '../sections/home_sections/Reviews';

export const Home = () => {
  const navigate = useNavigate();

  const services = [
    { price: 'From £100', desc: 'Our Car Detailing service provides meticulous care, ensuring every inch of your vehicle is spotless. We handle everything from the exterior wash to the interior deep clean, leaving your car looking and feeling brand new.', title: 'Car Detailing', image: servicethree },
    { price: 'From £150', desc: 'Our Deep Clean service goes beyond the surface, targeting dirt and grime in hard-to-reach areas. We use high-quality products and equipment to rejuvenate your vehicle, making it sparkle from the inside out.', title: 'Deep Clean', image: serviceone },
    { price: 'From £200', desc: 'Protect your vehicle’s paint with our Ceramic Protection service. This advanced treatment shields your car from the elements, giving it a long-lasting glossy finish that repels dirt and water.', title: 'Ceramic Protection', image: servicetwo },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToNextService = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const goToPrevService = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const getBackgroundIndex = (direction) => {
    if (direction === 'left') {
      return (activeIndex - 1 + services.length) % services.length;
    }
    if (direction === 'right') {
      return (activeIndex + 1) % services.length;
    }
    return activeIndex;
  };

  return (
    <div className="home page">
      <div className="home_open">
        <div className="home_open_inner">
          <h1 className="home_title">Swaleside Valeting</h1>
          <h3 className="home_subtitle">Premium Car Care, Ultimate Shine</h3>
          <p className="home_location">Thirsk, North Yorkshire</p>
          <div className="home_open_buttons">
            <button className="home_open_button" onClick={() => navigate('/services')}>Services</button>
            <button className="home_open_button" onClick={() => navigate('/contact')}>Get In Touch</button>
          </div>
        </div>
      </div>

      <div className="home_services">
        <h1 className="section_title">Our Services</h1>
        <h3 className="section_subtitle">Bringing the Best to Your Vehicle</h3>
        <div className="home_services_inner">
          <button className="carousel_button carousel_left" onClick={goToPrevService}>‹</button>

          <div className="service_item_background service_item_left">
            <img alt="Background Left" className="service_image_blurred" src={services[getBackgroundIndex('left')].image} />
          </div>

          <div className="service_item service_item_active">
            <img alt="Home" className="service_image" src={services[activeIndex].image} />
            <div className="service_inner">
              <p className="service_price">{services[activeIndex].price}</p>
              <div className="service_inner_inner">
                <h3 className="service_title">{services[activeIndex].title}</h3>
                <p className="service_desc">{services[activeIndex].desc}</p>
                <button onClick={() => navigate('/services')} className="service_button">Read More</button>
              </div>
            </div>
          </div>

          <div className="service_item_background service_item_right">
            <img alt="Background Right" className="service_image_blurred" src={services[getBackgroundIndex('right')].image} />
          </div>

          <button className="carousel_button carousel_right" onClick={goToNextService}>›</button>
        </div>
      </div>

      <Perks />
      <BeforeAndAfterSection />
      <Reviews />
    </div>
  );
};
