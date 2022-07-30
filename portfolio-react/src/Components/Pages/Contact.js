import React from 'react';
import '../../index.css';

export default function Contact() {
    return (
        <div>
            <h1 class="title">Contact</h1>
            <div class="info-body">
                <input class="contact" type="text" placeholder='Name' required />
                <input class="contact" type="email" placeholder='Email' required />
                <input class="contact" type="text" placeholder='Message' required />
            </div>
        </div>
    );
}