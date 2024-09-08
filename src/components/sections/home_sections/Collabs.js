import '../../styles/home_styling/Collabs.css';
import bus1 from '../../images/businesses/bus.jpeg';
import bus2 from '../../images/businesses/bus1.jpeg';    
import bus3 from '../../images/businesses/bus2.JPEG';   
import bus4 from '../../images/businesses/bus3.PNG';
import bus5 from '../../images/businesses/bus4.jpeg';
import bus6 from '../../images/businesses/bus5.PNG';
import bus7 from '../../images/businesses/bus6.jpeg';
import bus8 from '../../images/businesses/bus7.jpeg';
import bus9 from '../../images/businesses/bus8.JPEG';
import bus10 from '../../images/businesses/bus9.jpeg';

export const Collabs = () => {
    return (
        <div className="collabs">
            <h1 className="section_title">Businesses we've worked with</h1>
            <div className='collabs_inner'>
                <img src={bus1} alt='Logo' className='collab_image'/>
                <img src={bus2} alt='Logo' className='collab_image'/>
                <img src={bus3} alt='Logo' className='collab_image'/>
                <img src={bus4} alt='Logo' className='collab_image'/>
                <img src={bus5} alt='Logo' className='collab_image'/>
                <img src={bus6} alt='Logo' className='collab_image'/>
                <img src={bus7} alt='Logo' className='collab_image'/>
                <img src={bus8} alt='Logo' className='collab_image'/>
                <img src={bus9} alt='Logo' className='collab_image'/>
                <img src={bus10} alt='Logo' className='collab_image'/>
            </div>
        </div>
    );
};
