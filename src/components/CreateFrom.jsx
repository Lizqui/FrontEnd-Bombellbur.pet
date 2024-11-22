import React, { useState } from 'react';
import { Button, Modal, Col, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';

const CreateForm = ({ token }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [formData, setFormData] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
               
        const postData = new FormData();
        postData.append('name', formData.name);
        postData.append('species', formData.species);
        postData.append('age', formData.age);
        postData.append('description', formData.description);
        postData.append('image', formData.image);
        postData.append('url', formData.url);

                
            try {
                const response = await axios.post('http://localhost:8080/api/v1/pets', postData, {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` 
                  },
                });
                if (response.status === 200 || response.status === 204) {
                    toast.success('Peludito agregado correctamente', 'Éxito');
                    setShow(false)
                    setTimeout(() => {
                     window.location.reload();
                   }, 5000);
                  }
              } catch (error) {
                console.error(error);
                alert('Failed to upload pet');
              }             
    }

    return (
        <>
            <Button
                variant="outline-success"
                className="bi bi-plus-circle-dotted"
                style={{ fontSize: 'medium' }}
                onClick={() => setShow(true)}
            >
                &nbsp;&nbsp;&nbsp;&nbsp;Agregar una nueva mascota&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
            <Modal show={show} onHide={handleClose} style={{ marginTop: '50px' }} >
                <Modal.Header closeButton >
                    <Modal.Title style={{ marginLeft: '20px', margin: '5px', fontSize: 'large' }}>Registro de Mascotas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form style={{ margin: '15px', fontSize: 'medium' }} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="NamePet" >
                                <Form.Label >Nombre</Form.Label>
                                <Form.Control
                                    style={{ fontSize: 'small' }}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="specie">
                                <Form.Label>Especie</Form.Label>
                                <Form.Control
                                    style={{ fontSize: 'small' }}
                                    onChange={(e) => setFormData({ ...formData, species: e.target.value })}
                                    required
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="AgePet">
                                <Form.Label>Edad</Form.Label>
                                <Form.Control
                                    style={{ fontSize: 'small' }}
                                    type="number"
                                    required
                                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                />
                            </Form.Group>

                        </Row>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Descripción de la mascota</Form.Label>
                            <Form.Control
                                style={{ fontSize: 'small' }}
                                as="textarea"
                                required
                                rows={3}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="url">
                            <Form.Label>Url de la alcaldía</Form.Label>
                            <Form.Control
                                style={{ fontSize: 'small' }}
                                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="imagePet" className="mb-3">
                            <Form.Label>Seleccione una foto de la mascota</Form.Label>
                            <Form.Control
                                style={{ fontSize: 'small' }}
                                type="file"
                                required
                                onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                            />
                        </Form.Group>
                        <Modal.Footer style={{marginTop: '30px'}}>
                            <Button variant="primary" type="submit" style={{ fontSize: 'small' }}>
                                Guardar
                            </Button>                          
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CreateForm;