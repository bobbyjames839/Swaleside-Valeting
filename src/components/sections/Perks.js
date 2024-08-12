import serviceone from '../images/service_one.jpg';
import '../styles/Perks.css'

export const Perks = () => {

    const Perk = ({button, title, desc, right = true, image, classs = 'perk_right', class_perk = ''}) => {
        return (
          <div className={`perk ${classs}`}>
            {!right && 
            <>
            <span className={`perk_span ${(right ? 'perk_span_right' : 'perk_span_left' )}`}></span>
            <img className='perk_img' src={image}/>
            </>}
    
            <div className={`perk_info ${class_perk}`}>
              <h3 className='perk_title'>{title}</h3>
              <p className='perk_desc'>{desc}</p>
              <button className='perk_button'>{button}</button>
            </div>
    
            {right && 
            <>
            <img className='perk_img' src={image}/>
            <span className={`perk_span ${(right ? 'perk_span_right' : 'perk_span_left' )}`}></span>
            </>}
          </div>
        )
      }

    return (
        <div className='why_choose'>
            <h1 className="section_title">Why Swaleside Valeting?</h1>
            <h3 className='section_subtitle'>add a slogan add a slogan</h3>

            <div className='why_choose_inner'>
                <Perk 
                title = 'Personalised Assistance'
                desc = 'desc heredesc heredesc heredesc heredesc heredesc heredesc heredesc heredesc heredesc heredesc heredesc heredesc here'
                button = 'View More'
                image = {serviceone}/>

                <Perk 
                title = 'Personalised Assistance'
                desc = 'desc heredesc heredesc heredesc heredesc heredesc heredesc heredesc heredesc heredesc heredesc heredesc heredesc here'
                button = 'View More'
                right = {false}
                classs='perk_left'
                image = {serviceone}
                class_perk='perk_info_left'/>

                <Perk 
                title = 'Personalised Assistance'
                desc = 'desc heredesc heredesc heredesc heredesc heredesc heredesc heredesc heredesc heredesc heredesc heredesc heredesc here'
                button = 'View More'
                image = {serviceone}/>
            </div>

        </div>
    )
}