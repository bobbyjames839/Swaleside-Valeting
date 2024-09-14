import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home_styling/Home.css';
import serviceone from '../images/main/image2.webp';
import servicetwo from '../images/main/image10.webp';
import servicethree from '../images/main/image1.webp';
import { BeforeAndAfterSection } from '../sections/home_sections/BeforeAndAfterSection';
import { Perks } from '../sections/home_sections/Perks';
import { Reviews } from '../sections/home_sections/Reviews';
import { Collabs } from '../sections/home_sections/Collabs';

export const Home = () => {
  const navigate = useNavigate();
  const servicesRef = useRef(null); // Reference to the services section
  const [activeIndex, setActiveIndex] = useState(0);
  const [isServicesVisible, setIsServicesVisible] = useState(false); // State to track visibility

  const services = [
    {
      desc: 'Our Car Detailing service provides meticulous care, ensuring every inch of your vehicle is spotless. We handle everything from the exterior wash to the interior deep clean, leaving your car looking and feeling brand new.',
      title: 'Detailing',
      image: servicethree,
    },
    {
      desc: 'Our Valeting service offers comprehensive care for your vehicle, including both interior and exterior cleaning. We pay attention to every detail, ensuring your car is clean, fresh, and ready for the road.',
      title: 'Mobile Valeting',
      image: serviceone,
    },
    {
      desc: 'Protect your vehicle’s paint with our Ceramic Protection and Paint Protection service. This advanced treatment shields your car from the elements, providing a durable, glossy finish that resists dirt, water, and UV rays.',
      title: 'Ceramic Protection / Paint Protection',
      image: servicetwo,
    },
  ];

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

  // Intersection Observer to track when the services section becomes visible
  useEffect(() => {
    const currentRef = servicesRef.current; // Store the current value of the ref

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsServicesVisible(true); // Set to true when the section is visible
            observer.unobserve(entry.target); // Unobserve after it becomes visible to prevent re-render
          }
        });
      },
      { threshold: 0.2 } // 20% of the section needs to be visible for it to trigger
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="home page">
      <div className="home_open">
        <div className="home_open_inner">
          <h1 className="home_title">Swaleside Valeting</h1>
          <h3 className="home_subtitle">Premium Car Care, Ultimate Shine</h3>
          <p className="home_location">Thirsk, North Yorkshire</p>
          <div className="home_open_buttons">
            <button className="home_open_button" onClick={() => navigate('/services')}>
              Services
            </button>
            <button className="home_open_button" onClick={() => navigate('/contact')}>
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className="home_services" ref={servicesRef}>
        <h1 className="section_title">Our Services</h1>
        <h3 className="section_subtitle">Bringing the Best to Your Vehicle</h3>
        {isServicesVisible && (
          <div className="home_services_inner">
            <button className="carousel_button carousel_left" onClick={goToPrevService}>
              ‹
            </button>

            <div className="service_item_background service_item_left">
              <img
                alt="Background Left"
                className="service_image_blurred"
                src={services[getBackgroundIndex('left')].image}
                loading="lazy"
              />
            </div>

            <div className="service_item service_item_active">
              <img
                alt="Home"
                className="service_image"
                src={services[activeIndex].image}
                loading="lazy"
              />
              <div className="service_inner">
                <div className="service_inner_inner">
                  <h3 className="service_title">{services[activeIndex].title}</h3>
                  <p className="service_desc">{services[activeIndex].desc}</p>
                  <button onClick={() => navigate('/services')} className="service_button">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="service_item_background service_item_right">
              <img
                alt="Background Right"
                className="service_image_blurred"
                src={services[getBackgroundIndex('right')].image}
                loading="lazy"
              />
            </div>

            <button className="carousel_button carousel_right" onClick={goToNextService}>
              ›
            </button>
          </div>
        )}
      </div>

      <Perks />
      <Collabs />
      <BeforeAndAfterSection />
      <Reviews />
    </div>
  );
};
