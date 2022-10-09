import React, { useRef, useState } from 'react';
import '../../App.css';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export const LoginComp = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  const submitForm = (e) => {
    e.preventDefault();
    setError('');

    console.log(`email is ${emailRef.current.value}`);
    console.log(`password is ${passwordRef.current.value}`);
  }

  return (
    <>
      <div onClick={openForm} className="btn secondarybutton btn-rounded scale-on-hover">
        Login
      </div>
      <Modal centered show={showForm} onHide={closeForm}>
        <form onSubmit={submitForm}>
          <Modal.Header>
            <Modal.Title>
              Login here
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type='email' required ref={emailRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' required ref={passwordRef} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeForm} className='secondarybutton'>Cancel</Button>
            <Button onClick={submitForm} className='secondarybutton'>Submit</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
