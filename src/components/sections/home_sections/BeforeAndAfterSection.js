import React, { useState, useEffect, useRef } from 'react';
import before1 from '../../images/beforeafter/before5.webp';
import after1 from '../../images/beforeafter/after5.webp';
import before2 from '../../images/beforeafter/before7.webp';
import after2 from '../../images/beforeafter/after7.webp';
import '../../styles/home_styling/BeforeAndAfterSection.css'; 
import { useNavigate } from 'react-router-dom';

export const BeforeAndAfterSection = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isBeforeAfterVisible, setIsBeforeAfterVisible] = useState(false); // For visibility
  const beforeAfterRef = useRef(null); // Reference to the section

  const navigate = useNavigate();

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  // Intersection Observer to track when the before & after section becomes visible
  useEffect(() => {
    const currentRef = beforeAfterRef.current; // Store the current value of the ref

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsBeforeAfterVisible(true); // Set to true when visible
            observer.unobserve(entry.target); // Unobserve after becoming visible
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
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
    <div className='before_and_after_section' ref={beforeAfterRef}>
      <h1 className="section_title">Before & After</h1>
      <h3 className='section_subtitle'>Witness the Transformation: From Ordinary to Extraordinary</h3>

      {isBeforeAfterVisible && (
        <div className='before_and_after_inner'>
          <div 
            className='baa_container baa_container_left'
            onMouseEnter={() => handleMouseEnter('one')}
            onMouseLeave={handleMouseLeave}
          >
            <img 
              src={before1} 
              className={`baa_image baa_one ${hoveredImage === 'one' ? 'shrink-width' : hoveredImage === 'two' ? 'dim-image' : ''}`}
              alt="Before"
            />
            <img 
              src={after1} 
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
              src={before2} 
              className={`baa_image baa_three ${hoveredImage === 'two' ? 'shrink-width' : hoveredImage === 'one' ? 'dim-image' : ''}`}
              alt="Before"
            />
            <img 
              src={after2} 
              className={`baa_image baa_four ${hoveredImage === 'two' ? 'grow-width' : ''}`}
              alt="After"
            />
          </div>
        </div>
      )}

      <button onClick={() => (navigate('/before_and_after'))} className='view_more_baa'>View more</button>
    </div>
  );
};
