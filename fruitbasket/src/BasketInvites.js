import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, { useState } from "react";
import { ButtonGroup } from 'react-bootstrap';


function BasketInvites() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //make basket join requests a fruit shape and have an int for the number of invites
    return (
        <div>
                <Button onClick={handleShow}>
                Basket Join Requests
                </Button>

            <h1></h1>
    
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                Save Changes
                </Button>
            </Modal.Footer>
            </Modal>
        </div>
    );
  }
//route to the fruit basket (write api get request that returns data of the people within the fruit basket)

export default BasketInvites