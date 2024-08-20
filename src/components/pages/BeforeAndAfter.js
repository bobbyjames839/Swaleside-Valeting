import { useState } from 'react';
import '../styles/other_styling/BeforeAfter.css';
import img from '../images/service_one.jpg';
import img1 from '../images/service_two.jpg';

export const BeforeAndAfter = () => {

  const BeforeAfter = ({ name }) => {
    const [before, setBefore] = useState(true);

    const toggleView = () => {
      setBefore(!before);
    }

    return (
      <div className='before_after_item'>
        <h3 className='before_after_title'>{name}</h3>
        <img
          className={`before_after_image before`}
          src={img}
          alt="Before"
          style={{ clipPath: before ? 'inset(0 0 0 0)' : 'inset(0 0 0 100%)' }}
        />
        <img
          className={`before_after_image after`}
          src={img1}
          alt="After"
          style={{ clipPath: before ? 'inset(0 100% 0 0)' : 'inset(0 0 0 0)' }}
        />
        <button className='view_toggle' onClick={toggleView}>
          {before ? 'View After' : 'View Before'}
        </button>
      </div>
    )
  }

  return (
    <div className="before_and_after_page">
      <div className='before_after_open'>
        <h1 className='section_title'>Before and after</h1>
        <h3 className='section_subtitle'>Transforming Vehicles, One Detail at a Time</h3>
      </div>

      <div className='before_after_inner'>
        <BeforeAfter name='Audi R8'/>
        <BeforeAfter name='BMW M4 Competition'/>
        <BeforeAfter name='Audi R8'/>
        <BeforeAfter name='BMW M4 Competition'/>
        <BeforeAfter name='Audi R8'/>
        <BeforeAfter name='BMW M4 Competition'/>
      </div>

    </div>
  );
}
