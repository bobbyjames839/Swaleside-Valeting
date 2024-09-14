import '../styles/Footer.css';
import logo from '../images/logo/logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className="footer">
      <div className='footer_inner'>
        <div className='footer_inner_left'>
          <div className='footer_section footer_section_left'>
            <h3 className='footer_subtitle'>Sections</h3>
            <a href='/' className='footer_para'>Home</a>
            <a href='/services' className='footer_para'>Services</a>
            <a href='/before_and_after' className='footer_para'>Before & After</a>
            <a href='/about_us' className='footer_para'>About Us</a>
            <a href='/contact' className='footer_para'>Contact</a>
          </div>

          <div className='footer_section'>
            <h3 className='footer_subtitle'>Contact</h3>
            <p className='footer_para'>07715 639464</p>
            <p className='footer_para'>info@swalesidevaleting.com</p>
            <p className='footer_para'>Thirsk, North Yorkshire</p>
          </div>
        </div>

        <div className='footer_right'>
          <img alt='Footer' className='footer_image' src={logo} />
          <div className='footer_socials'>
            <a href='https://www.facebook.com/profile.php?id=61553292410630' className='footer_social_link' aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href='https://www.instagram.com/swalesidevaleting/' className='footer_social_link' aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram}/>
            </a>
          </div>
        </div>
      </div>

      <p className='footer_note'>Developed by Bobby.</p>
    </div>
  );
}
