import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import React, { useState } from "react";
import { ButtonGroup } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import BasketDropdownUsers from './BasketDropdownUsers';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    ConversationList,
    Conversation,
    Avatar,
  } from "@chatscope/chat-ui-kit-react";

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
            
            <Modal show={show} onHide={handleClose} size="lg"
            aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header closeButton>
                <Modal.Title>Basket Join Requests</Modal.Title>
            </Modal.Header>
            
            <Container className="text-right p-3">
                <Row >
                    <Col xs={10} className="block-example border border-primary">
                        <Conversation name="Patrik" lastSenderName="Patrik" info="You up?" /*make this method show the profile linkonClick={() => this.setState({ showing: !showing })}*/>
                        <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Patrik" />
                        </Conversation>
                    </Col>
                    <Col>
                        <ButtonGroup>
                            <Button className="like-button btn-outline-dark bg-transparent" /*onClick={this.handleChange}*/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                            </Button>

                            <Button className="like-button btn-outline-danger bg-transparent" /*onClick={this.handleChange}*/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>

                <Row >
                    <Col xs={10} className="block-example border border-secondary">
                        <Conversation name="Patrik" lastSenderName="Patrik" info="You up?" /*make this method show the profile linkonClick={() => this.setState({ showing: !showing })}*/>
                        <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Patrik" />
                        </Conversation>
                    </Col>
                    <Col>
                        <ButtonGroup>
                            <Button className="like-button btn-outline-dark bg-transparent" /*onClick={this.handleChange}*/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                            </Button>

                            <Button className="like-button btn-outline-danger bg-transparent" /*onClick={this.handleChange}*/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>

                <Row>
                    <Col xs={10} className="block-example border border-success">
                        <Conversation name="Patrik" lastSenderName="Patrik" info="You up?" /*make this method show the profile linkonClick={() => this.setState({ showing: !showing })}*/>
                        <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Patrik" />
                        </Conversation>
                    </Col>
                    <Col>
                        <ButtonGroup>
                            <Button className="like-button btn-outline-dark bg-transparent" /*onClick={this.handleChange}*/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                            </Button>

                            <Button className="like-button btn-outline-danger bg-transparent" /*onClick={this.handleChange}*/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>

                <Row >
                    <Col xs={10} className="block-example border border-danger">
                        <Conversation name="Patrik" lastSenderName="Patrik" info="You up?" /*make this method show the profile linkonClick={() => this.setState({ showing: !showing })}*/>
                        <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Patrik" />
                        </Conversation>
                    </Col>
                    <Col>
                        <ButtonGroup>
                            <Button className="like-button btn-outline-dark bg-transparent" /*onClick={this.handleChange}*/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                            </Button>

                            <Button className="like-button btn-outline-danger bg-transparent" /*onClick={this.handleChange}*/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>

                <Row >
                    <Col className="block-example border border-warning" xs={10}>
                        <Conversation name="Patrik" lastSenderName="Patrik" info="You up?" /*make this method show the profile linkonClick={() => this.setState({ showing: !showing })}*/>
                        <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Patrik" />
                        </Conversation>
                    </Col>
                    <Col>
                        <ButtonGroup>
                            <Button className="like-button btn-outline-dark bg-transparent" /*onClick={this.handleChange}*/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                            </Button>

                            <Button className="like-button btn-outline-danger bg-transparent" /*onClick={this.handleChange}*/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                
                <Row >
                    <Col className="block-example border border-info" xs={10}>
                        <Conversation name="Patrik" lastSenderName="Patrik" info="You up?" /*make this method show the profile linkonClick={() => this.setState({ showing: !showing })}*/>
                        <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Patrik" />
                        </Conversation>
                    </Col>
                    <Col>
                        <ButtonGroup>
                            <Button className="like-button btn-outline-dark bg-transparent" /*onClick={this.handleChange}*/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                            </Button>

                            <Button className="like-button btn-outline-danger bg-transparent" /*onClick={this.handleChange}*/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                            </Button>
                        </ButtonGroup>
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

export default BasketInvites