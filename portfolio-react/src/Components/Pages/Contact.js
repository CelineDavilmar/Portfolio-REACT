import React from 'react';

export default function Contact() {
    return (
        <div>
            <h1 class="title">Contact</h1>
            <p class="info-body">
                Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
            </p>
            <input type="text" placeholder='Name' required />
            <input type="email" placeholder='Email' required />
            <input type="text" placeholder='Message' required />
        </div>
    );
}