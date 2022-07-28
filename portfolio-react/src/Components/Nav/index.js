import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

const pages = [
    {
        name: "about",
        description:
            "About me and my coding journey",
    },
    { name: "contact", description: "Ways to contact me directly" },
    { name: "home", description: "landing page" },
    {
        name: "projects",
        description: "projects created",
    },
];

const handleClick = () => {
    console.log("click handled")
}

function Nav() {
    return (
        <header>
            <h2>
                <a href="/">
                    Portfolioooooo
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => handleClick()}>
                            About me
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => handleClick()}>Contact</a>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={() => handleClick()}>Portfolio</a>
                    </li>
                    <li>
                        <a href="#resume" onClick={() => handleClick()}>Resume</a>
                    </li>
                    {
                        pages.map((page) => (
                            <li className="mx-1" key={page.name} >
                                <span onClick={() => { handleClick() }}>
                                    {capitalizeFirstLetter(page.name)}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Nav;