import React from 'react';
import runbuddy from '../../assets/img/RunBuddy.png';
import todo from '../../assets/img/todolist.png';
import quiz from '../../assets/img/QuizMania.png';
import password from '../../assets/img/Password Generator.png';
import Workday from '../../assets/img/Workday.png';
import weather from '../../assets/img/Weather.png';

export default function Portfolio() {
    return (
        <div>
            <h1 class="title">Projects</h1>
            <p class="info-body">
                <section id="Projects" class="cards">

                    <article class="card right-section display">
                        <a class="card" href="https://github.com/CelineDavilmar/WhatsTheWeather">
                            <img class="upcoming" src={weather} alt="DEV Project" />
                            <div class="overlay">Weather Dashboard</div>
                        </a>

                        <a class="card" href="https://celinedavilmar.github.io/run-buddy/">
                            <img class="upcoming" src={runbuddy} alt="Run Buddy" />
                            <div class="overlay">Run Buddy</div>
                        </a>
                        <a class="card" href="https://samuelga25.github.io/Project1-To-do-List/">
                            <img class="upcoming" src={todo} alt="To Do" />
                            <div class="overlay">To Do List</div>
                        </a>

                        <a class="card" href="https://github.com/CelineDavilmar/Quizmania">
                            <img class="upcoming" src={quiz} alt="Run Buddy" />
                            <div class="overlay">Quiz Mania</div>
                        </a>
                        <a class="card" href="https://github.com/CelineDavilmar/PasswordHelper">
                            <img class="upcoming" src={password} alt="Run Buddy" />
                            <div class="overlay">Password Generator</div>
                        </a>
                        <a class="card" href="https://github.com/CelineDavilmar/WorkDay-Scheduler">
                            <img class="upcoming" src={Workday} alt="Run Buddy" />
                            <div class="overlay">Workday Scheduler</div>
                        </a>
                    </article>
                </section>
            </p>
        </div>
    );
}