import React from 'react'
import './NavigationBar.css'
import { NavLink } from 'react-router-dom';
import { DiHtml53DEffects } from "react-icons/di";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas'

function NavigationBar() {
   const activeLink={
    textDecoration:"underline",
    color:"black",
    fontSize:"1.2rem",
    fontWeight:"bold"
  }
  const inactiveLink={
    color:"black",
  }
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand to="#" className='fs-2 credit'><DiHtml53DEffects className='logoInfo me-2'/>CreditBlitz</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='fw-bold'>
                  CreditBlitz
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/" className='navLink pe-3' style={({isActive})=>{
                    return isActive? activeLink : inactiveLink;
                  }}>Home</NavLink>
                  <NavLink to="/aboutus" className='navLink pe-3' style={({isActive})=>{
                    return isActive? activeLink : inactiveLink;
                  }}>About Us</NavLink>
                  <NavLink to="/services" className='navLink pe-3' style={({isActive})=>{
                    return isActive? activeLink : inactiveLink;
                  }}>Services</NavLink>
                  <NavLink to="/faqs" className='navLink pe-3' style={({isActive})=>{
                    return isActive? activeLink : inactiveLink;
                  }}>FAQs</NavLink>
                  <NavLink to="/contactus" className='navLink pe-3' style={({isActive})=>{
                    return isActive? activeLink : inactiveLink;
                  }}>Contact Us</NavLink>
                  <NavLink to="/login" className='navLink pe-3' style={({isActive})=>{
                    return isActive? activeLink : inactiveLink;
                  }}>Login</NavLink>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default NavigationBar