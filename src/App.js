import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/styles/App.css'
import { Home } from './components/pages/Home.js'
import { Services } from './components/pages/Services.js'
import { AboutUs } from './components/pages/AboutUs.js'
import { Contact } from './components/pages/Contact.js'
import { BeforeAndAfter } from './components/pages/BeforeAndAfter.js'
import { Nav } from './components/sections/Nav.js'
import { Footer } from './components/sections/Footer.js';

function App() {

    return (
        <div className='App'>
            <Router>
                <Nav/>
                <Routes>
                  <Route path = '/' element = {<Home/>}/>
                  <Route path = '/services' element = {<Services/>}/>
                  <Route path = '/before_and_after' element = {<BeforeAndAfter/>}/>
                  <Route path = '/about_us' element = {<AboutUs/>}/>
                  <Route path = '/contact' element = {<Contact/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;