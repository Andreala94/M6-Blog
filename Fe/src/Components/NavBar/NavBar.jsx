import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Modal } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import '../NavBar/NavBar.css';
import Login from '../Pages/Login';


const NavBar = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true)
  }
  const handleCloseModal = () => {
    setModalVisible(false)
  }
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


              <Button className='login ms-2' onClick={showModal}>Login</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={modalVisible} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title> Accedi </Modal.Title>
          <Modal.Body>
          <Form>
            {/* Input email */}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Inserisci la tua email" />
            </Form.Group>

            {/* Input password */}
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Inserisci la tua password" />
            </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseModal}> Chiudi </Button>
            </Modal.Footer>
        </Modal.Header>

      </Modal>

    </>
  )
}

export default NavBar;