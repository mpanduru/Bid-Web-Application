import { updateDoc, doc } from 'firebase/firestore';
import { React, useRef, useState, useContext } from 'react'
import { Col, Form, Modal, Row, Button } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { updatePrice } from '../../context/FirestoreContext';
import { firestore } from '../../firebase';

export const BidAuction = () => {
    const [showForm, setShowForm] = useState(false);

    const { currentUser } = useContext(AuthContext);
    const itemID = useRef();
    const currentPrice = useRef();

    const openForm = () => setShowForm(true);

    const closeForm = () => setShowForm(false);

    const submitForm = async () => {
        const userDoc = doc(firestore, "auctions", itemID.current.value);
        const newField = {
            startPrice: currentPrice.current.value,
            currentHighestBidder: currentUser.email
        };
        await updateDoc(userDoc, newField);
        closeForm();
        window.location.reload();
    }

    return (
        <>
            {
                currentUser ?
                    <div>
                        <div className="col d-flex justify-content-center my-3">
                            <div onClick={openForm} className='btn btn-outline-secondary mx-2'>
                                Bid Now
                            </div>
                        </div>
                        <Modal centered show={showForm} onHide={closeForm}>
                            <form onSubmit={submitForm}>
                                <Modal.Header>
                                    <Modal.Title>Bid On Auction</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Item ID</Form.Label>
                                                <Form.Control type="text" required ref={itemID} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Bidding Price ($)</Form.Label>
                                                <Form.Control type="number" required ref={currentPrice} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={closeForm}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" onClick={submitForm}>
                                        Submit Bid
                                    </Button>
                                </Modal.Footer>
                            </form>
                        </Modal>
                    </div>
                    :
                    <div></div>
            }
        </>
    )
}
