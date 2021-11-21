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
                    <Conversation name="Lilly" lastSenderName="Lilly" info="Hello" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" name="Lilly" />
                    </Conversation>
                    
                    <Conversation name="Joe" lastSenderName="Joe" info="Hello" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" name="Joe" />
                    </Conversation>
                    
                    <Conversation name="Emily" lastSenderName="Emily" info="Hello" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" name="Emily" />
                    </Conversation>
                    
                    <Conversation name="Kai" lastSenderName="Kai" info="Hello" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" name="Kai" />
                    </Conversation>
                                
                    <Conversation name="Akane" lastSenderName="Akane" info="Hello" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" name="Akane" />
                    </Conversation>
                                        
                    <Conversation name="Eliot" lastSenderName="Eliot" info="Hello" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" name="Eliot" />
                    </Conversation>
                                                        
                    <Conversation name="Zoe" lastSenderName="Zoe" info="Hello" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" name="Zoe" />
                    </Conversation>
                                                                    
                    <Conversation name="Patrik" lastSenderName="Patrik" info="Hello" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" name="Patrik" />
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

