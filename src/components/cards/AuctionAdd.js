import { React, useRef, useState, useContext } from 'react'
import { Col, Form, Modal, Row, Button } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { addDoc, collection } from 'firebase/firestore';
import { firestore, storage } from '../../firebase';
import { useUploadFile } from 'react-firebase-hooks/storage';
import { ref } from 'firebase/storage';

export const AuctionAdd = () => {
    const [showForm, setShowForm] = useState(false);
    const [error, setError] = useState('');
    const [uploadFile, uploading, snapshot, error2] = useUploadFile();

    const itemTitle = useRef();
    const itemDesc = useRef();
    const startPrice = useRef();
    const buyNowPrice = useRef();
    const itemImage = useRef();

    const { currentUser } = useContext(AuthContext);

    const openForm = () => setShowForm(true);
    const closeForm = () => {
        console.log(itemTitle.current.value)
        setShowForm(false);
    }

    const submitForm = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await addDoc(collection(firestore, "auctions"), {
                title: itemTitle.current.value,
                startPrice: startPrice.current.value,
                owner: currentUser.email,
                buynow: buyNowPrice.current.value,
                description: itemDesc.current.value,
                active: true,
                currentHighestBidder: "No one bidded for this auction",
                boughtBy: "",
            });
        } catch (error) {
            console.log(error)
        }

        const reference = ref(storage, itemTitle.current.value + ".jpg");

        if (itemImage.current.files[0]) {
            await uploadFile(reference, itemImage.current.files[0], {
                contentType: 'image/jpg'
            });
        }

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
                                NEW AUCTION
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
                                                <Form.Label>Start Price ($)</Form.Label>
                                                <Form.Control type="number" required ref={startPrice} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Buy Now Price ($)</Form.Label>
                                                <Form.Control type="number" required ref={buyNowPrice} />
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
                                                    ref={itemImage}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={closeForm}>
                                        Cancel
                                    </Button>
                                    <div>
                                        {error2 && <strong></strong>}
                                        {uploading && <span></span>}
                                        {snapshot && <span></span>}
                                    </div>
                                    <Button variant="primary" onClick={submitForm}>
                                        Submit
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
