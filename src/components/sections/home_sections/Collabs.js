import React, { useState, useEffect, useRef } from 'react';
import { Img } from 'react-image';
import '../../styles/home_styling/Collabs.css';
import bus1 from '../../images/businesses/bus.webp';
import bus2 from '../../images/businesses/bus1.webp';
import bus3 from '../../images/businesses/bus2.webp';
import bus4 from '../../images/businesses/bus3.webp';
import bus5 from '../../images/businesses/bus4.webp';
import bus6 from '../../images/businesses/bus5.webp';
import bus7 from '../../images/businesses/bus6.webp';
import bus8 from '../../images/businesses/bus7.webp';
import bus9 from '../../images/businesses/bus8.webp';
import bus10 from '../../images/businesses/bus9.webp';
import bus11 from '../../images/businesses/bus10.webp';

export const Collabs = () => {
    const collabsRef = useRef(null); // Reference to the collabs section
    const [isCollabsVisible, setIsCollabsVisible] = useState(false); // State to track visibility

    // Intersection Observer to track when the collabs section becomes visible
    useEffect(() => {
        const currentRef = collabsRef.current; // Store the current value of the ref

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsCollabsVisible(true); // Set to true when visible
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
        <div className="collabs" ref={collabsRef}>
            <h1 className="section_title">Businesses we've worked with</h1>
            {isCollabsVisible && (
                <div className="collabs_inner">
                    <Img src={bus1} alt='Logo' className='collab_image' loader={<div>Loading...</div>} unloader={<div>Error loading image</div>} />
                    <Img src={bus2} alt='Logo' className='collab_image' loader={<div>Loading...</div>} unloader={<div>Error loading image</div>} />
                    <Img src={bus3} alt='Logo' className='collab_image' loader={<div>Loading...</div>} unloader={<div>Error loading image</div>} />
                    <Img src={bus4} alt='Logo' className='collab_image' loader={<div>Loading...</div>} unloader={<div>Error loading image</div>} />
                    <Img src={bus5} alt='Logo' className='collab_image' loader={<div>Loading...</div>} unloader={<div>Error loading image</div>} />
                    <Img src={bus6} alt='Logo' className='collab_image' loader={<div>Loading...</div>} unloader={<div>Error loading image</div>} />
                    <Img src={bus7} alt='Logo' className='collab_image' loader={<div>Loading...</div>} unloader={<div>Error loading image</div>} />
                    <Img src={bus8} alt='Logo' className='collab_image' loader={<div>Loading...</div>} unloader={<div>Error loading image</div>} />
                    <Img src={bus9} alt='Logo' className='collab_image' loader={<div>Loading...</div>} unloader={<div>Error loading image</div>} />
                    <Img src={bus10} alt='Logo' className='collab_image' loader={<div>Loading...</div>} unloader={<div>Error loading image</div>} />
                    <Img src={bus11} alt='Logo' className='collab_image' loader={<div>Loading...</div>} unloader={<div>Error loading image</div>} />
                </div>
            )}
        </div>
    );
};
