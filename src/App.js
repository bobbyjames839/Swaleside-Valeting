import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './components/styles/App.css'
import { Home } from './components/pages/Home.js'
import { Services } from './components/pages/Services.js'
import { AboutUs } from './components/pages/AboutUs.js'
import { Contact } from './components/pages/Contact.js'
import { BeforeAndAfter } from './components/pages/BeforeAndAfter.js'
import { Nav } from './components/sections/Nav.js'
import { Footer } from './components/sections/Footer.js';

function App() {
    const [isImagesLoaded, setIsImagesLoaded] = useState(false); // Track when all images are loaded

    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    };

    // Function to preload all images
    const preloadImages = (imageUrls) => {
        const promises = imageUrls.map((url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = resolve;
                img.onerror = reject;
            });
        });
        return Promise.all(promises);
    };

    useEffect(() => {
        // Preload all images for the Home component
        const imageUrls = [
            // Add all your image paths here
            require('./components/images/main/image2.webp'),
            require('./components/images/main/image10.webp'),
            require('./components/images/main/image1.webp'),
            // Add more image paths if necessary
        ];

        preloadImages(imageUrls)
            .then(() => {
                setIsImagesLoaded(true); // Set to true once all images are loaded
            })
            .catch((err) => console.error("Error loading images", err));
    }, []);

    if (!isImagesLoaded) {
        // Show a loading spinner or a loading screen while images are loading
        return <div className="loading-spinner">Loading...</div>;
    }

    return (
        <div className='App'>
            <Router>
                <Nav />
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/before_and_after' element={<BeforeAndAfter />} />
                    <Route path='/about_us' element={<AboutUs />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
