
import Navbar from "./components/navbar";
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Tour from './components/tours';
import Footer from './components/footer';
import whatsapp from './images/whatsapp.png'
import { useState } from 'react'
import contactus from './images/contactus.png'
import Modal from "./Modal";
// import { ToastContainer, toast } from 'react-toastify'
function App() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  return (
    <>
      <Navbar />
      <Modal />
      <Hero />
      <About />
      <Services />
      <Tour />
      <Footer />

      <div className="fixed-bottom right-100 p-3" style={{ zIndex: "6", left: "initial" }}>
        <a href="https://wa.me/919476096915?text=I am planning to visit Andaman Islands">
          <img className='whatsapp' src={whatsapp} style={{ width: '140px' }} alt="abc" />
        </a>
      </div>
      {/* <button className='contact fixed-bottom ' onClick={toggleModal} style={{ zIndex: "6", right: "initial" }}>
        <img src={contactus} alt="abc" />
      </button>
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'>
          </div>
          <div className="modal-content">
            <h2>hello</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam deserunt earum voluptatum, sint accusantium quibusdam tempora quas ducimus eos quis.</p>
          </div>
        </div>
      )} */}

    </>
  );
}

export default App;
