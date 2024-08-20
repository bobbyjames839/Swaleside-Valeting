import React, { useState } from 'react';
import serviceone from '../../images/service_one.jpg';
import servicetwo from '../../images/service_two.jpg';
import home from '../../images/home.jpg';
import '../../styles/home_styling/BeforeAndAfterSection.css'; 
import { useNavigate } from 'react-router-dom';

export const BeforeAndAfterSection = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const navigate = useNavigate();

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className='before_and_after_section'>
      <h1 className="section_title">Before & After</h1>
      <h3 className='section_subtitle'>Witness the Transformation: From Ordinary to Extraordinary</h3>

      <div className='before_and_after_inner'>
        <div 
          className='baa_container baa_container_left'
          onMouseEnter={() => handleMouseEnter('one')}
          onMouseLeave={handleMouseLeave}
        >
          <img 
            src={serviceone} 
            className={`baa_image baa_one ${hoveredImage === 'one' ? 'shrink-width' : hoveredImage === 'two' ? 'dim-image' : ''}`}
            alt="Before"
          />
          <img 
            src={home} 
            className={`baa_image baa_two ${hoveredImage === 'one' ? 'grow-width' : ''}`}
            alt="After"
          />
        </div>

        <div 
          className='baa_container baa_container_right'
          onMouseEnter={() => handleMouseEnter('two')}
          onMouseLeave={handleMouseLeave}
        >
          <img 
            src={servicetwo} 
            className={`baa_image baa_three ${hoveredImage === 'two' ? 'shrink-width' : hoveredImage === 'one' ? 'dim-image' : ''}`}
            alt="Before"
          />
          <img 
            src={home} 
            className={`baa_image baa_four ${hoveredImage === 'two' ? 'grow-width' : ''}`}
            alt="After"
          />
        </div>
      </div>

      <button onClick={() => (navigate('/before_and_after'))} className='view_more_baa'>View more</button>
    </div>
  );
}
