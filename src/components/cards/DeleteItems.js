import { updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { React, useRef, useState, useContext } from 'react'
import { Col, Form, Modal, Row, Button } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { updatePrice } from '../../context/FirestoreContext';
import { firestore } from '../../firebase';

export const DeleteItems = () => {

    const [showForm, setShowForm] = useState(false);

    const itemID = useRef();

    const openForm = () => setShowForm(true);

    const closeForm = () => setShowForm(false);

    const submitForm = async () => {
        const itemDoc = doc(firestore, "auctions", itemID.current.value);
        await deleteDoc(itemDoc);
        closeForm();
        window.location.reload();
    }

    return (
        <div>
            <div className='null-fill'></div>
            <h1 className='text-center title'>Delete a User's Auction</h1>
            <div className='col-md-12 text-center'>
                <div onClick={openForm} className="btn btn-secondary btn-rounded scale-on-hover me-3 m-5 w-75">
                    Delete an Auction
                </div>
            </div>
            <Modal centered show={showForm} onHide={closeForm}>
                <form onSubmit={submitForm}>
                    <Modal.Header>
                        <Modal.Title>Delete an Auction</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Auction ID</Form.Label>
                                    <Form.Control type="text" required ref={itemID} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Reason</Form.Label>
                                    <Form.Control type="text" required />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeForm}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={submitForm}>
                            Delete This Auction!
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}
