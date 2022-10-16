import { React, useRef, useState, useContext } from 'react'
import { Alert, Col, Form, Modal, Row, Button } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';

export const AuctionAdd = () => {
    const [showForm, setShowForm] = useState(false);
    const [error, setError] = useState('');

    const itemTitle = useRef();
    const itemDesc = useRef();
    const startPrice = useRef();
    const buyNowPrice = useRef();
    const itemDuration = useRef();

    const { currentUser } = useContext(AuthContext);

    const openForm = () => setShowForm(true);
    const closeForm = () => setShowForm(false);

    const submitForm = () => {
        setShowForm(false);
    }

    return (
        <>
            <div className="col d-flex justify-content-center my-3">
                <div onClick={openForm} className='btn btn-outline-secondary mx-2'>
                    NEW ACTION
                </div>
            </div>
            <Modal centered show={showForm} onHide={closeForm}>
                <form onSubmit={submitForm}>
                    <Modal.Header>
                        <Modal.Title>Create New Auction</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Item Title</Form.Label>
                                    <Form.Control type="text" required ref={itemTitle} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Item Description</Form.Label>
                                    <Form.Control type="text" required ref={itemDesc} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Start Price</Form.Label>
                                    <Form.Control type="number" required ref={startPrice} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Buy Now Price</Form.Label>
                                    <Form.Control type="number" required ref={buyNowPrice} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Item Duration (H)</Form.Label>
                                    <Form.Control type="number" required ref={itemDuration} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Seller</Form.Label>
                                    <Form.Control type='text' value={currentUser.email} readOnly />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Item Image</Form.Label>
                                    <Form.Control
                                        type='file'
                                        label="Select Item Image"
                                        custom
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}
