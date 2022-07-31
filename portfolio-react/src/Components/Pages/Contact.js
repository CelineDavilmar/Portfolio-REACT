import React from 'react';
import '../../index.css';

export default function Contact() {
    return (
        <div>
            <h1 class="title">Contact</h1>
            <div class="info-body">
                <input class="contact" type="text" placeholder='Full Name' required />
                <input class="contact" type="email" placeholder='Email@example.com' required formValidate />
                <input class="contact-box" type="text" placeholder='Enter Message' required />
                <button type="submit">Let's Connect!</button>
            </div>
        </div>
    );
}