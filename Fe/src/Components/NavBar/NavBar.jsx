import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{ Image }  from 'react-bootstrap';
import '../NavBar/NavBar.css';


function NavBar () {
  return (
    <>
    <Navbar expand="lg" className="navbar ">
      <Container fluid>
      <Image className='logo ms-4' src="https://img.favpng.com/19/16/16/computer-icons-blogger-logo-png-favpng-B7KarAb7aWnaBXeV9dtiJcVjb.jpg" alt="Logo" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='blog' href="#action1">Blog Andrea</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Inserisci qui "
              className="me-2"
              aria-label="Search"
            />
            <Button className="bottone">Cerca</Button>

            <Button className='login ms-2'>Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar;