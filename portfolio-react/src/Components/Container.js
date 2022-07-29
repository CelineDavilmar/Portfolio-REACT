import React, { useState } from 'react';
import Nav from './Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Footer from './Footer';
import '../index.css';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <div>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}