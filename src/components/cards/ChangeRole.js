import { updateDoc, doc } from 'firebase/firestore';
import { React, useRef, useState, useContext } from 'react'
import { Col, Form, Modal, Row, Button } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { updatePrice } from '../../context/FirestoreContext';
import { firestore } from '../../firebase';

export const ChangeRole = () => {

    const [showForm, setShowForm] = useState(false);

    const userID = useRef();
    const role = useRef();

    const openForm = () => setShowForm(true);

    const closeForm = () => setShowForm(false);

    const submitForm = async () => {
        const userDoc = doc(firestore, "users", userID.current.value);
        const newField = { role: role.current.value };
        await updateDoc(userDoc, newField);
        closeForm();
        window.location.reload();
    }

    return (
        <div>
            <div className='null-fill'></div>
            <h1 className='text-center title'>Give Admin/Client Privileges to Another User</h1>
            <div className='col-md-12 text-center'>
                <div onClick={openForm} className="btn btn-secondary btn-rounded scale-on-hover me-3 m-5 w-75">
                    CHANGE A USER'S ROLE
                </div>
            </div>
            <Modal centered show={showForm} onHide={closeForm}>
                <form onSubmit={submitForm}>
                    <Modal.Header>
                        <Modal.Title>Change a User's Role Here</Modal.Title>
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
                                    <Form.Label>ROLE</Form.Label>
                                    <Form.Select type="dropdown" required ref={role}>
                                        <option>CLIENT</option>
                                        <option>ADMIN</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeForm}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={submitForm}>
                            Change Role!
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}
