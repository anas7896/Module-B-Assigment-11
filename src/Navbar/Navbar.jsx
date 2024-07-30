import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import jawanPakistanImage from '../assets/jawan-pakistan-logo.png';
import styles from './Navbar.module.css';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Navbar.Brand href="#home" className={styles.navbarBrand}>
        <img
          src={jawanPakistanImage}
          width="270"
          className="d-inline-block align-top"
          alt="Jawan Pakistan"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className={styles.navLink}>Home</Nav.Link>
          <Nav.Link href="#about" className={styles.navLink}>About Us</Nav.Link>
          <NavDropdown title="Training" className={styles.dropdown}>
            <NavDropdown.Item href="#web-mobile" className={styles.dropdownItem}>Web and Mobile Application Development</NavDropdown.Item>
            <NavDropdown.Item href="#flutter" className={styles.dropdownItem}>Flutter Application Development</NavDropdown.Item>
            <NavDropdown.Item href="#graphics" className={styles.dropdownItem}>Graphics Designing and Video Editing</NavDropdown.Item>
            <NavDropdown.Item href="#digital-marketing" className={styles.dropdownItem}>Digital and Social Media Marketing</NavDropdown.Item>
            <NavDropdown.Item href="#blockchain" className={styles.dropdownItem}>Blockchain Development</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contact" className={styles.navLink}>Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
