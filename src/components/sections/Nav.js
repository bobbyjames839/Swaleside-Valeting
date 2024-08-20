import { Link, useNavigate } from "react-router-dom"
import '../styles/Nav.css'
import logo from '../images/logo.png'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Nav = () => {
  const [navDropdown, setNavDropdown] = useState(false)

  const navigate = useNavigate('')

  return (
    <>
    <div className="nav">
      <div className="nav_section nav_left">
        <img alt="Logo" className="logo" src={logo}/>
      </div>

      <div className="nav_section nav_right">
        <Link className="nav_link" to="/">Home</Link>
        <Link className="nav_link" to="/services">Services</Link>
        <Link className="nav_link" to='/before_and_after'>Before & After</Link>
        <Link className="nav_link" to="/about_us">About Us</Link>
        <button className="book_now" onClick={() => (navigate('/contact'))}>Book Now</button>
      </div>

      <FontAwesomeIcon className = 'toggle_nav_dropdown' icon={faBars} onClick={() => (setNavDropdown(true))} />
    </div>

    {navDropdown && <div className="nav_dropdown">
      <FontAwesomeIcon className="close_nav_dropdown" icon={faTimes} onClick={() => (setNavDropdown(false))}/>
      <img src={logo} alt='Logo' className="dropdown_logo"/>
      <div className="dropdown_links">
        <Link className="nav_dropdown_link" to="/" onClick={() => (setNavDropdown(false))}>Home</Link>
        <Link className="nav_dropdown_link" to="/services" onClick={() => (setNavDropdown(false))}>Services</Link>
        <Link className="nav_dropdown_link" to='/before_and_after' onClick={() => (setNavDropdown(false))}>Before & After</Link>
        <Link className="nav_dropdown_link" to="/about_us" onClick={() => (setNavDropdown(false))}>About Us</Link>
        <button className="book_now book_now_dropdown" onClick={() => {navigate('/contact'); setNavDropdown(false)}}>Book Now</button>
      </div>
    </div>}
    </>
  )
}


