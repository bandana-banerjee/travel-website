
import Navbar from "./components/navbar";
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Tour from './components/tours';
import Footer from './components/footer';
import whatsapp from './images/whatsapp.png'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tour />
      <Footer />
      <div class="fixed-bottom right-100 p-3" style={{zIndex:"6",left:"initial"}}>
        <a href="https://wa.me/8327066455?text=Hello How may I help you?">
          <img class='whatsapp'src={whatsapp} style={{width:'140px'}}/>
        </a>
      </div>
    </>
  );
}

export default App;
