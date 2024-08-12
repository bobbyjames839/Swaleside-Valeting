import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import serviceone from '../images/service_one.jpg';
import servicetwo from '../images/service_two.jpg';
import { BeforeAndAfterSection } from '../sections/BeforeAndAfterSection';
import { Perks } from '../sections/Perks';
import { Reviews } from '../sections/Reviews';

export const Home = () => {

  const navigate = useNavigate();

  const Service = ({ price, desc, title, image, extraClass = '' }) => {
    return (
      <div className={`service ${extraClass}`}>
        <img alt='Home' className='service_image' src={image} alt={title}/>
        <div className='service_inner'>
          <p className='service_price'>{price}</p>
          <div className='service_inner_inner'>
            <h3 className='service_title'>{title}</h3>
            <p className='service_desc'>{desc}</p>
            <button onClick={() => navigate('/services')} className='service_button'>Read More</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home page">

      <div className="home_open">
        <div className='home_open_inner'>
          <h1 className='home_title'>Swaleside Valeting</h1>
          <h3 className='home_subtitle'>add slogan, add slogan, add slogan, add slogan, add slogan</h3>
          <p className='home_location'>Thirsk, North Yorkshire</p>
          <div className='home_open_buttons'>
            <button className='home_open_button'>Services</button>
            <button className='home_open_button'>Get In Touch</button>
          </div>
        </div>
      </div>

      <div className='home_services'>
        <h1 className="section_title">Our Services</h1>
        <h3 className='section_subtitle'>add a slogan add a slogan</h3>
        <div className='services_inner'>
          <Service 
            price='From £100' 
            desc='write something here write something here write something here write something here write something here' 
            title='Car Detailing' 
            image={serviceone}
            extraClass='service_one'
          />
          <Service 
            price='From £100' 
            desc='write something here write something here write something here write something here write something here' 
            title='Car Detailing'
            image={servicetwo} 
            extraClass='service_two'
          />
        </div>
      </div>

      <Perks/>
      <BeforeAndAfterSection /> 
      <Reviews/>

    </div>
  );
}
