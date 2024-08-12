import '../styles/Footer.css'
import logo from '../images/logo.png'

export const Footer = () => {
  return (
    <div className="footer">
      <div className='footer_inner'>
        <div className='footer_inner_left'>
          <div className='footer_section'>
            <h3 className='footer_subtitle'>Sections</h3>
            <a href='/' className='footer_para'>Home</a>
            <a href='/services' className='footer_para'>Services</a>
            <a href='/before_and_after' className='footer_para'>Before & After</a>
            <a href='/about_us' className='footer_para'>About Us</a>
            <a href='/contact' className='footer_para'>Contact</a>
            <a href='/' className='footer_para'>Book Now</a>
          </div>

          <div className='footer_section'>
            <h3 className='footer_subtitle'>Contact</h3>
            <p className='footer_para'>07786 241225</p>
            <p className='footer_para'>commpany@gmail.com</p>
            <p className='footer_para'>Thirsk, North Yorkshire</p>
          </div>
        </div>

        <img alt='Footer' className='footer_image' src={logo}/>
      </div>

      <p className='footer_note'>Developed by Bobby.</p>
    </div>
  )
}