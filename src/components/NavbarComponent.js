import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from '../img/logo.webp'
const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setExpanded(false);
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#service", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#highlights", label: "Highlights" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${scrolled ? 'scrolled' : ''} ${expanded ? 'expanded' : ''}`}
      expanded={expanded}
    >
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="#home" className="brand-logo">
          <div className="logo-wrapper">
            <img src={logo} width={140} ></img>
            {/* <div className="brand-text">
              <span className="brand-main">Jai Shri Mahakal</span>
              <span className="brand-sub">Events</span>
            </div> */}
          </div>
        </Navbar.Brand>

        {/* Navbar Toggle */}
        <Navbar.Toggle 
          aria-controls="nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
          className="navbar-toggle"
        >
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </Navbar.Toggle>

        {/* Navbar Collapse */}
        <Navbar.Collapse id="nav">
          <Nav className="mx-auto nav-links">
            {navItems.map((item, index) => (
              <Nav.Link 
                key={index}
                href={item.href}
                className="nav-link-item"
                onClick={handleNavClick}
                data-aos="fade-down"
                data-aos-delay={index * 100}
              >
                <span className="nav-link-text">{item.label}</span>
                <div className="nav-link-underline"></div>
              </Nav.Link>
            ))}
          </Nav>

          {/* CTA Button */}
          <div className="nav-cta" data-aos="fade-down" data-aos-delay="600">
            <Button 
              className="cta-button"
              href="#contact"
              onClick={handleNavClick}
            >
              Get Quote
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>

      {/* Background Overlay for Mobile */}
      {expanded && (
        <div className="nav-overlay" onClick={() => setExpanded(false)}></div>
      )}
    </Navbar>
  );
};

export default NavbarComponent;