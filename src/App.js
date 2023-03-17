import React from 'react';

import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Content from './components/Content';
import Choose from './pages/Choose';
import AboutMore from './pages/AboutMore';

function App() {
    const scrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    
    return (
        <div className="relative font-light text-gray-800 scroll-smooth">
            <Home />
            <About />
            <AboutMore />
            <Services />
            <Choose />
            <Content />
            <Testimonial />
            <Contact />
            <Footer />
            <div className='fixed bottom-6 right-6'
                onClick={() => scrollToTop()}
            >
                <div className='rounded-full shadow-lg bg-secondary p-2 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default App;