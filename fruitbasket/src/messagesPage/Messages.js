import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import React from 'react';
import Button from 'react-bootstrap/Button'
import {
    ConversationList,
    Conversation,
    Avatar,
  } from "@chatscope/chat-ui-kit-react";
import MessagingSingleUI from "./MessagingSingleUI";
import InviteToBasket from './InviteToBasket';

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showing: true };
      }

    buttonClick(){
        this.setState({ showing: true })
    }
    
    render() {
        const { showing } = this.state;
        return(
        <div>
            {showing ?
            <div style={{
            height: "500px"
            }}>
                <ConversationList>        
                    <Conversation name="Lilly" lastSenderName="Lilly" info="You up?" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Lilly" />
                    </Conversation>
                    
                    <Conversation name="Joe" lastSenderName="Joe" info="You up?" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Joe" />
                    </Conversation>
                    
                    <Conversation name="Emily" lastSenderName="Emily" info="You up?" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Emily" />
                    </Conversation>
                    
                    <Conversation name="Kai" lastSenderName="Kai" info="You up?" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Kai" />
                    </Conversation>
                                
                    <Conversation name="Akane" lastSenderName="Akane" info="You up?" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Akane" />
                    </Conversation>
                                        
                    <Conversation name="Eliot" lastSenderName="Eliot" info="You up?" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Eliot" />
                    </Conversation>
                                                        
                    <Conversation name="Zoe" lastSenderName="Zoe" info="You up?" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Zoe" />
                    </Conversation>
                                                                    
                    <Conversation name="Patrik" lastSenderName="Patrik" info="You up?" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrek-forever-after-1587549453.jpg?crop=0.676xw:0.901xh;0.0969xw,0&resize=480:*" name="Patrik" />
                    </Conversation>
                    
                </ConversationList>
            </div>
            : null
            }
            
            {!showing ?
                <div>
                    <div style={{ display: 'inline-block' , padding: 5}}><Button  onClick={() => this.setState({ showing: true })}>Back to Messages</Button>{' '}</div>
                    <div style={{ display: 'inline-block' }}><InviteToBasket></InviteToBasket></div>
                    <MessagingSingleUI></MessagingSingleUI>
                </div>
            : null
            }
        </div>
        );
        };
        
    }

export default Messages

