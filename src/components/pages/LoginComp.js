import React, { useContext, useRef, useState } from 'react';
import '../../App.css';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const LoginComp = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  const submitForm = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(emailRef.current.value, passwordRef.current.value);
      closeForm();
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
      <div onClick={openForm} className="btn secondarybutton btn-rounded scale-on-hover me-3">
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
            <Button onClick={submitForm} className='secondarybutton' type='submit'>Submit</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
