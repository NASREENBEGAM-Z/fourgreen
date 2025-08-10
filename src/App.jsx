import React from 'react';
import './style.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import PropertiesSection from './components/PropertiesSection';
import LayoutSection from './components/LayoutSection';
import ContactSection from './components/ContactSection';
// import TestimonialsSection from './components/TestimonialsSection';

const HomePage = () => (
    <>
        <HeroSection />
        {/* <div className="bg-gradient-to-b from-black via-yellow-900 to-black py-8">
            <TestimonialsSection />
        </div> */}
        <div className="bg-gradient-to-t from-black via-yellow-900 to-yellow-400 py-8">
            <ContactSection />
        </div>
    </>
);

const App = () => {
    return (
        <Router>
            <NavBar />
            {/* WhatsApp Floating Icon */}
            <a
                href="https://wa.me/917845711997"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-3 flex items-center justify-center transition-all border-4 border-yellow-400"
                title="Chat on WhatsApp"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 24 24" className="text-white">
                    <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.69.97.99-3.59-.23-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                </svg>
            </a>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/properties" element={<PropertiesSection />} />
                <Route path="/layout" element={<LayoutSection />} />
            </Routes>
        </Router>
    );
};

export default App;