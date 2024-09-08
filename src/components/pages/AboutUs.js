import '../styles/other_styling/AboutUs.css';
import image1 from '../images/main/image1.jpg';
import { useNavigate } from 'react-router-dom';

export const AboutUs = () => {

  const navigate = useNavigate();

  return (
    <div className="about_us page">

      <button className='get_free_quote' onClick={() => navigate('/contact')}>
        Get a Free Quote
      </button>

      <div className='about_us_open'>
        <h1 className='section_title'>About Us</h1>
        <h3 className='section_subtitle'>Excellence in Every Detail</h3>
      </div>

      <div className='about_us_middle'>
        <div className='aum_left'>
          <h3 className='aum_title'>Setting the Standard</h3>
          <span className='about_us_span'></span>
          <p className='aum_text'>
            At Swaleside Valeting, we pride ourselves on delivering top-tier car care services that go beyond expectations. Our journey began with a passion for cars and a commitment to excellence. Over the years, we have perfected our techniques and expanded our expertise to become a trusted name in the industry.
          </p>
          <br></br>
          <p className='aum_text'>
            Our mission is simple: to treat every vehicle as if it were our own. We understand that your car is more than just a mode of transportation; it's a reflection of your lifestyle and a significant investment. That's why we use only the highest quality products and the latest techniques to ensure that your vehicle receives the best care possible.
          </p>
          <br></br>
          <p className='aum_text'>
            Whether you're looking for a regular maintenance wash or a full detailing service, we are here to meet your needs with professionalism and dedication. Our team of skilled technicians is passionate about cars and committed to providing a service that leaves you completely satisfied.
          </p>
          <button className='aum_button' onClick={() => navigate('/contact')}>
            Contact Us
          </button>
        </div>
        <img src={image1} className='aum_image' alt='About us' />
      </div>
    </div>
  );
};
