import './App.css';
import Nav from "./components/Navbar/Nav.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skill.jsx';
import Project from './components/Projectes/Project.jsx';
import Contacts from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';


const App = () => {
  return <>
  <Nav/>
  <Hero/>
  <About/>
  <Skills/>
  <Project/>
 <Contacts/>
 <Footer/>
  </>
}

export default App;
