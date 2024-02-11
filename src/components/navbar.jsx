import React, { useState } from 'react';
import logo from '../images/download (3).svg';
import { pageLinks, socialLinks } from '../data';
import { useGlobalContext } from '../Context';
import { FaTimes } from 'react-icons/fa';


const Navbar = () => {

  const [showLink, setShowLink] = useState(false)
  const { openSidebar, openModal, isSidebarOpen, closeSidebar } = useGlobalContext()
  const toggleLink = () => {
    setShowLink(!showLink)
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="aaa" />
            <button type="button" className="nav-toggle" id="nav-toggle" onClick={openSidebar}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* {!showLink && <ul className="nav-links show-links" id="nav-links">
            {pageLinks.map((link) => {
              return <li key={link.id}>
                <a href={link.href} className="nav-link"> {link.text} </a>
              </li>
            })}
            <button onClick={openModal} className='btn-contact'>Contact us</button>

          </ul>} */}
          <ul className={isSidebarOpen ? 'nav-links show-links' : 'nav-links'} id="nav-links">
            <button className='close-btn' onClick={closeSidebar}>
              <FaTimes />
            </button>
            {pageLinks.map((link) => {
              return <li key={link.id}>
                <a href={link.href} className="nav-link"> {link.text} </a>
              </li>
            })}
            <button onClick={openModal} className='btn-contact'>Contact us</button>

          </ul>


          <ul className="nav-icons">
            {socialLinks.map((link) => {
              const { id, href, icon } = link;
              return (<li key={link.id}>
                <a href={href} target="_blank" rel="noreferrer" className="nav-icon"
                ><i className={icon}></i
                ></a>
              </li>);
            })}
          </ul>

        </div>
      </nav>


    </>
  )
}

export default Navbar;