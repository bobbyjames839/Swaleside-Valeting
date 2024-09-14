import image1 from '../../images/main/image8.webp';
import image2 from '../../images/main/image16.webp';
import image3 from '../../images/main/image13.webp';
import auto from '../../images/auto.webp';
import '../../styles/home_styling/Perks.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export const Perks = () => {
  const navigate = useNavigate();

  const Perk = ({ button, title, desc, right = true, image, class_perk = '' }) => {
    const perkRef = useRef(null);
    const isVisible = useRef(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isVisible.current) {
              isVisible.current = true; // Mark as visible
              const animationClass = right ? 'perk_right_animate' : 'perk_left_animate';
              entry.target.classList.add(animationClass); // Add animation class
              observer.unobserve(entry.target); // Stop observing once visible
            }
          });
        },
        { threshold: 0.2 } // Trigger when 20% of the element is visible
      );

      if (perkRef.current) {
        observer.observe(perkRef.current);
      }

      // Cleanup observer on component unmount
      return () => {
        if (perkRef.current) {
          observer.unobserve(perkRef.current);
        }
      };
    }, [right]);

    return (
      <div ref={perkRef} className="perk">
        {!right && (
          <>
            <span className={`perk_span ${right ? 'perk_span_right' : 'perk_span_left'}`}></span>
            <img alt="Perk" className="perk_img" src={image} />
          </>
        )}

        <div className={`perk_info ${class_perk}`}>
          <h3 className="perk_title">{title}</h3>
          <p className="perk_desc">{desc}</p>
          <button className="perk_button" onClick={() => navigate('/services')}>
            {button}
          </button>
        </div>

        {right && (
          <>
            <img alt="Perk" className="perk_img" src={image} />
            <span className={`perk_span ${right ? 'perk_span_right' : 'perk_span_left'}`}></span>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="why_choose">
      <h1 className="section_title">Why Swaleside Valeting?</h1>
      <h3 className="section_subtitle">Your Car Deserves the Best</h3>

      <div className="why_choose_inner">
        {/* First Perk (Right Aligned) */}
        <div className="perk_outer_right">
          <Perk
            title="Attention to Detail"
            desc="At Swaleside Valeting, we pride ourselves on our meticulous attention to detail. Every nook and cranny of your vehicle is given the utmost care, ensuring it leaves our hands in pristine condition."
            button="Learn More"
            image={image1}
            right={true}
          />
        </div>

        {/* Second Perk (Left Aligned) */}
        <div className="perk_outer_left">
          <Perk
            title="High-Quality Products"
            desc="We use only the finest quality products in our services, ensuring that your vehicle receives the best possible treatment. Our products are designed to protect and enhance your car’s finish, inside and out."
            button="Learn More"
            image={image2}
            right={false}
            class_perk="perk_info_left"
          />
        </div>

        {/* Third Perk (Right Aligned) */}
        <div className="perk_outer_right">
          <Perk
            title="Skilled Valeting Professionals"
            desc="Our team consists of highly trained and experienced valeting professionals who are passionate about car care. They bring their expertise to every job, ensuring your car receives top-notch service every time."
            button="Learn More"
            image={image3}
            right={true}
          />
        </div>

        {/* Fourth Perk (Left Aligned) */}
        <div className="perk_outer_left">
          <Perk
            title="Fully Qualified"
            desc="Our team is professionally trained by Autoglym, ensuring we possess the highest standards in car care. With our Autoglym certification and passion for excellence, we deliver superior service to your vehicle every time."
            button="Learn More"
            image={auto}
            right={false}
            class_perk="perk_info_left"
          />
        </div>
      </div>
    </div>
  );
};
