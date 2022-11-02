import React from 'react'
import { Navbar, Container,Nav } from 'react-bootstrap'
import { useState,useEffect } from 'react';
import logo from '../assets/img/antonio3.5.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export default function NavBar() {
     const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = ( ) => {
        if (window.scrollY > 50) {
            setScrolled(true);
        }else {
           setScrolled(false);
        }
        }
        window.addEventListener("scroll", onScroll);
 
        return () => window.removeEventListener("scroll", onScroll);
      }, [])
  
      const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }
    
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt='logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>projects</Nav.Link>
      
        </Nav>
        <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/antonio-kallo-1b8770178'><img src={navIcon1}/></a>
                <a href='https://github.com/antoniokallo'><img src={navIcon2} /></a>
                <a href='https://www.instagram.com/antoniokallo/'><img src={navIcon3} /></a>
            </div>
            <button className='vvd' onClick={() => ('connect')}><span>lets connect</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}
