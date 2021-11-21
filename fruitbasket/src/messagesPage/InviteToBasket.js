import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, { useState } from "react";
import { ButtonGroup } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    ConversationList,
    Conversation,
    Avatar,
  } from "@chatscope/chat-ui-kit-react";

function InviteToBasket() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //make basket join requests a fruit shape and have an int for the number of invites
    return (
        <div>
            <Button onClick={handleShow} variant="warning">
            Invite to Basket
            </Button>
            
            <Modal show={show} onHide={handleClose} size="lg"
            aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header closeButton>
                <Modal.Title>Which Baskets would you like to invite them to?</Modal.Title>
            </Modal.Header>
            
            <Container className="text-right p-3">
                <Row >
                    <Col xs={10} className="block-example border border-success">
                        <Conversation name="Apples" lastSenderName="Members: " info="John, Mason, Malik, Maya" onClick={ () => alert("Pretend this is showing the profile you clicked on")}>
                        <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" name="Patrik" />
                        </Conversation>
                    </Col>
                    <Col>
                        <Button variant="danger" size="lg">Invite</Button>
                    </Col>
                </Row>
                <Row >
                    <Col xs={10} className="block-example border border-primary">
                        <Conversation name="Oranges"  lastSenderName="Members: " info="Bob, Ross, Joe, Alison" onClick={ () => alert("Pretend this is showing the profile you clicked on")}>
                        <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" name="Patrik" />
                        </Conversation>
                    </Col>
                    <Col>
                        <Button variant="info" size="lg">Invite</Button>
                    </Col>
                </Row>
                <Row >
                    <Col xs={10} className="block-example border border-danger">
                        <Conversation name="Watermelons"  lastSenderName="Members: " info="Jack, Jill, Howard" onClick={ () => alert("Pretend this is showing the profile you clicked on")}>
                        <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" name="Patrik" />
                        </Conversation>
                    </Col>
                    <Col>
                        <Button variant="success" size="lg">Invite</Button>
                    </Col>
                </Row>
                <Row >
                    <Col xs={10} className="block-example border border-warning">
                        <Conversation name="Kiwi"  lastSenderName="Members: " info="Iris, Aurora" onClick={ () => alert("Pretend this is showing the profile you clicked on")}>
                        <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" name="Patrik" />
                        </Conversation>
                    </Col>
                    <Col>
                        <Button variant="warning" size="lg">Invite</Button>
                    </Col>
                </Row>
            </Container>
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

export default InviteToBasket