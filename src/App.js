import "./App.css";
import Header from "./Components/Header";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Home from "./Components/home/Home";
import Proyectos from "./Components/proyectos/Proyectos";
import Services from "./Components/services/Services";
import Skills from "./Components/skill/Skills";




function App() {
  return (
    <div>
     <Header/>
     <main className="main">
     <Home/>
     <About/>
     <Skills/>
     <Proyectos/>
     <Services/>
     <Contact/>
     <Footer/>
    </main>
   
    </div>
  );
}

export default App;
