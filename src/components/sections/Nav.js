import { Link } from "react-router-dom"
import '../styles/Nav.css'
import logo from '../images/logo.png'

export const Nav = () => {
  return (
    <div className="nav">
      <div className="nav_section nav_left">
        <img alt="Logo" className="logo" src={logo}/>
      </div>

      <div className="nav_section nav_right">
        <Link className="nav_link" to="/">Home</Link>
        <Link className="nav_link" to="/services">Services</Link>
        <Link className="nav_link" to='/before_and_after'>Before & After</Link>
        <Link className="nav_link" to="/about_us">About Us</Link>
        <Link className="nav_link" to="/contact">Contact</Link>
        <button className="book_now">Book Now</button>
      </div>
    </div>
  )
}