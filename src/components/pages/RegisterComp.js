import React, { useRef, useState, useContext } from 'react';
import '../../App.css';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { AuthContext } from '../../context/AuthContext';

export const RegisterComp = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const cnfPasswordRef = useRef();
  const nameRef = useRef();
  const locationRef = useRef();

  const { register } = useContext(AuthContext);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  const submitForm = async (e) => {
    e.preventDefault();
    setError('');

    if (passwordRef.current.value !== cnfPasswordRef.current.value)
      return setError("Passwords do not match");

    try {
      await register(emailRef.current.value, passwordRef.current.value, nameRef.current.value, locationRef.current.value);
      closeForm();
    } catch (err) {
      setError(err)
    }
  }

  return (
    <>
      <div onClick={openForm} className="btn secondarybutton btn-rounded scale-on-hover me-2">
        Register
      </div>
      <Modal centered show={showForm} onHide={closeForm}>
        <form onSubmit={submitForm}>
          <Modal.Header>
            <Modal.Title>
              Register here
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type='email' required ref={emailRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control required ref={nameRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control required ref={locationRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' required ref={passwordRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type='password' required ref={cnfPasswordRef} />
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
