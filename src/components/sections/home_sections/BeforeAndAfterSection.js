import React, { useState, useEffect, useRef } from 'react';
import { Img } from 'react-image';
import before1 from '../../images/beforeafter/before5.webp';
import after1 from '../../images/beforeafter/after5.webp';
import before2 from '../../images/beforeafter/before7.webp';
import after2 from '../../images/beforeafter/after7.webp';
import '../../styles/home_styling/BeforeAndAfterSection.css'; 
import { useNavigate } from 'react-router-dom';

export const BeforeAndAfterSection = () => {
  const [isBeforeAfterVisible, setIsBeforeAfterVisible] = useState(false); 
  const [hoveredImage, setHoveredImage] = useState(null);
  const beforeAfterRef = useRef(null); 
  const observerRef = useRef(null); 

  const navigate = useNavigate();

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  // Intersection Observer to track when the before & after section becomes visible
  useEffect(() => {
    const currentRef = beforeAfterRef.current;

    // Lazy load only when the observer is triggered
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsBeforeAfterVisible(true);
              observerRef.current.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
    }

    if (currentRef) {
      observerRef.current.observe(currentRef);
    }

    return () => {
      if (currentRef && observerRef.current) {
        observerRef.current.unobserve(currentRef);
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
            <Img 
              src={before1} 
              alt="Before" 
              className={`baa_image baa_one ${hoveredImage === 'one' ? 'shrink-width' : hoveredImage === 'two' ? 'dim-image' : ''}`}
              loader={<div>Loading...</div>} // Optional loader
              unloader={<div>Error loading image</div>} // Optional error handler
            />
            <Img 
              src={after1} 
              alt="After" 
              className={`baa_image baa_two ${hoveredImage === 'one' ? 'grow-width' : ''}`}
              loader={<div>Loading...</div>}
              unloader={<div>Error loading image</div>}
            />
          </div>

          <div 
            className='baa_container baa_container_right'
            onMouseEnter={() => handleMouseEnter('two')}
            onMouseLeave={handleMouseLeave}
          >
            <Img 
              src={before2} 
              alt="Before" 
              className={`baa_image baa_three ${hoveredImage === 'two' ? 'shrink-width' : hoveredImage === 'one' ? 'dim-image' : ''}`}
              loader={<div>Loading...</div>}
              unloader={<div>Error loading image</div>}
            />
            <Img 
              src={after2} 
              alt="After" 
              className={`baa_image baa_four ${hoveredImage === 'two' ? 'grow-width' : ''}`}
              loader={<div>Loading...</div>}
              unloader={<div>Error loading image</div>}
            />
          </div>
        </div>
      )}

      <button onClick={() => navigate('/before_and_after')} className='view_more_baa'>View more</button>
    </div>
  );
};
