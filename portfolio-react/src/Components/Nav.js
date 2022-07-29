import React from 'react';
import '../index.css';

function Nav({ currentPage, handlePageChange }) {
    return (
        <ul className="nav-tabs">
            <li className="nav-item">
                <a
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link highlighted' : 'nav-link'}
                >
                    Roldine C Davilmar
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link highlighted' : 'nav-link'}
                >
                    About Me
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link highlighted' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link highlighted' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link highlighted' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default Nav;