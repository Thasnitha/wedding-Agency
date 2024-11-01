import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'



const Header = () => {
  return (
    <div >
    <Navbar collapseOnSelect expand="lg" className="bg-body-white">
    <Container>
      <Navbar.Brand href="#home"><h4 style={{color:'#3a7d61'}}>your<span style={{color:'black'}}>story</span></h4></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav  style={{marginLeft:'250px',color:'black'}} className="me-auto icon">
          <Nav.Link style={{color:'black'}} href="/">Main</Nav.Link>
          <Nav.Link style={{color:'black'}} href="/about">About us</Nav.Link>
          <Nav.Link style={{color:'black'}} href="/couples">Couples</Nav.Link>
          <Nav.Link style={{color:'black'}} href="/services">Services</Nav.Link>
          <Nav.Link style={{color:'black'}} href="/contacts">Contacts</Nav.Link>



         
        </Nav>
        <Nav style={{marginLeft:'300px',color:'black'}} className="me-auto ">
          <Nav.Link style={{color:'black'}} href="#"><i class="fa-brands fa-instagram"></i></Nav.Link>
          <Nav.Link style={{color:'black'}} href="#"><i  style={{color:'#3a7d61'}} class="fa-brands fa-facebook"></i></Nav.Link>
         



         
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header