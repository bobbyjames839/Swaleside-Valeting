import '../../styles/home_styling/Collabs.css';
import image11 from '../../images/image11.jpg';

export const Collabs = () => {
    return (
        <div className="collabs">
            <h1 className="section_title">Businesses we work with</h1>
            <div className='collabs_inner'>
                <img src={image11} alt='Logo' className='collab_image'/>
                <img src={image11} alt='Logo' className='collab_image'/>
                <img src={image11} alt='Logo' className='collab_image'/>
                <img src={image11} alt='Logo' className='collab_image'/>
            </div>
        </div>
    );
};
