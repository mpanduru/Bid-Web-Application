import { updateDoc, doc, deleteDoc, getDoc } from 'firebase/firestore';
import { React, useRef, useState, useContext } from 'react'
import { Col, Form, Modal, Row, Button } from 'react-bootstrap';
import { deleteUser } from 'firebase/auth';
import { firestore } from '../../firebase';
import { FirestoreContextGetQuery } from '../../context/FirestoreContext';
import { auth } from '../../firebase';

export const DeleteUsers = () => {

    const [showForm, setShowForm] = useState(false);

    const userID = useRef();
    const role = useRef();

    const openForm = () => setShowForm(true);

    const closeForm = () => setShowForm(false);

    const submitForm = async () => {
        const userDoc = doc(firestore, "users", userID.current.value);
        await deleteDoc(userDoc);
        closeForm();
        window.location.reload();
    }

    return (
        <div>
            <div className='null-fill'></div>
            <h1 className='text-center title'>Delete a User</h1>
            <div className='col-md-12 text-center'>
                <div onClick={openForm} className="btn btn-secondary btn-rounded scale-on-hover me-3 m-5 w-75">
                    Delete a User's Account
                </div>
            </div>
            <Modal centered show={showForm} onHide={closeForm}>
                <form onSubmit={submitForm}>
                    <Modal.Header>
                        <Modal.Title>Delete a User's Account Here</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>User ID</Form.Label>
                                    <Form.Control type="text" required ref={userID} />
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
                            Delete This User!
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}
