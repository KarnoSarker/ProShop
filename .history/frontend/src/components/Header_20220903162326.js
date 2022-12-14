import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand href='/'>ProShop</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/cart'>Cart</Nav.Link>
            <Nav.Link href='/login'>Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
