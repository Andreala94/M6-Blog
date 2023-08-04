import React, { useContext, useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { FormDataContext } from '../Context/FormDataContex'

const LoginModal = ({ modalVisible, setModalVisible, onSubmit, showModal }) => {
    const { formData, setFormData } = useContext(FormDataContext)

    console.log(formData)

    const handleCloseModal = () => {
        setModalVisible(false)
    }
    return (
        <Modal show={modalVisible} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title> Accedi </Modal.Title>
                <Modal.Body>
                    <Form onSubmit={onSubmit}>
                        {/* Input email */}
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Inserisci la tua email"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>

                        {/* Input password */}
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Inserisci la tua password"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                        <Button type="submit">Login</Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseModal}>
                        {' '}
                        Chiudi{' '}
                    </Button>
                </Modal.Footer>
            </Modal.Header>
        </Modal>
    )
}
export default LoginModal
