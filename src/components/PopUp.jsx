import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import fondo from '../public/img/fondoModal.png';

const PopUp = ({showModal, handleClose}) => {    
    return(
        <Modal 
            show={showModal} 
            onHide={handleClose}  
            size="sm" 
            aria-labelledby="example-modal-sizes-title-sm"
            centered            
        >           
            <Modal.Body style={{ padding: 0 }}>
                <Image src={fondo} fluid />
            </Modal.Body>
        </Modal>
    );
}

export default PopUp;
