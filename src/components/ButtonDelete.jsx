import React, { useState } from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { deletePets } from '../help/service/service';

const ButtonDelete = ({ id }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (event, id) => {
        event.preventDefault();

        try {
            const url = `/api/v1/pets/${id}`            
            const response = await deletePets(url);            
             if (response.status === 200 || response.status === 204) {
               toast.success('Peludito eliminado correctamente', 'Éxito');
               setShow(false)
               setTimeout(() => {
                window.location.reload();
              }, 5000);
             }

        } catch (error) {
            toast.error('Error al crear el usuario', 'Error');
        }
    };

    return (
        <>
            <Button
                variant="danger"
                className="bi bi-trash3"
                onClick={handleShow}
            />
            <Modal show={show} onHide={handleClose} centered>
                <Alert variant="danger" style={{ margin: '0px' }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ventana de confirmación</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ fontSize: 'large' }}>
                        ¿Usted está seguro de eliminar este peludito? 
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={(event) => handleSubmit(event, id)}>
                            Aceptar
                        </Button>
                    </Modal.Footer>
                </Alert>
            </Modal>
        </>
    )
}

export default ButtonDelete;