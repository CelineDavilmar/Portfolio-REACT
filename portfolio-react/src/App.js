import './App.css';
import Nav from './Components/Nav';
import Portfolio from './Components/Portfolio Page/portfolio';
import Resume from './Components/Resume Page/resume';
import About from './Components/About Page/about';
import Contact from './Components/Contact Page/contact';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
