import React from 'react';
import runbuddy from '../../assets/RunBuddy.png';
import todo from '../../assets/todolist.png';


export default function Portfolio() {
    return (
        <div>
            <h1 class="title">Portfolio</h1>
            <p class="info-body">
                <section id="Projects" class="cards">

                    <article class="card right-section display">
                        <a class="card right-section display" href="https://celinedavilmar.github.io/DEV./">
                            <img class="recent" src="" alt="DEV Project" />
                            <div class="overlay">DEV.</div>
                        </a>

                        <a class="card" href="https://celinedavilmar.github.io/run-buddy/">
                            <img class="upcoming" src="./assets/RunBuddy.png" alt="Run Buddy" />
                            <div class="overlay">Run Buddy</div>
                        </a>
                        <a class="card" href="https://samuelga25.github.io/Project1-To-do-List/">
                            <img class="upcoming" src={todo} alt="To Do" />
                            <div class="overlay">To Do List</div>
                        </a>

                        <a class="card" href="https://celinedavilmar.github.io/run-buddy/">
                            <img class="upcoming" src={runbuddy} alt="Run Buddy" />
                            <div class="overlay">Run Buddy</div>
                        </a>
                        <a class="card" href="https://celinedavilmar.github.io/run-buddy/">
                            <img class="upcoming" src={runbuddy} alt="Run Buddy" />
                            <div class="overlay">Run Buddy</div>
                        </a>
                        <a class="card" href="https://celinedavilmar.github.io/run-buddy/">
                            <img class="upcoming" src={runbuddy} alt="Run Buddy" />
                            <div class="overlay">Run Buddy</div>
                        </a>
                    </article>
                </section>
            </p>
        </div>
    );
}