import React from 'react';
import me from '../../assets/img/rcd.png';

export default function About() {
    return (
        <box>
            <h1 class="title">About</h1>
            <div class="me"><img src={me} /></div>
            <p class="info-body">
                I am a graduate from the Florida International University with an interest in Software Development.
                I possess strong interpersonal skills as well as a solid background in computer science and Full-stack
                engineering.
                My goal is to apply my knowledge of software applications gained through previous work experience while
                continuing to expand my knowledge. Some of my strengths are that I have strong people skills, a strong work ethic;
                can also multitask under pressure and adapt easily to changes; very self-motivated. I have also decided to continue my
                education to get certified in AWS.
            </p>
        </box>
    );
}