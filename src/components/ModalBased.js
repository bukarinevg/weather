
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '@styles/ModalBased.scss';

function ModalBased({show, handleClose, handleSubmit, heading, body,footer}) {
return (
    <Modal size="lg" show={show} onHide={handleClose}>
        {
            heading ?
                <Modal.Header closeButton>
                    <Modal.Title>{heading}</Modal.Title>
                </Modal.Header>
            : null
        }
        
        <Modal.Body>{body}</Modal.Body>
        {
            footer ?
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                    </Button>
                </Modal.Footer>           
            : null
        }
    </Modal>
        )
};

export default ModalBased; 