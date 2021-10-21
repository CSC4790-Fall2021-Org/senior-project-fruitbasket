import "./profilePage/profile.css";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import BasketUI from "./BasketUI";
import React from 'react';
import Button from 'react-bootstrap/Button'
import {
    ConversationList,
    Conversation,
    Avatar,
  } from "@chatscope/chat-ui-kit-react";

class Group extends React.Component {
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
                    <Conversation name="Peaches" lastSenderName="Peaches" info="Yes i can do it for you" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://cdn.shopify.com/s/files/1/1061/1924/products/Peach_Emoji_large.png?v=1571606034" name="Peaches!" />
                    </Conversation>
                    
                    <Conversation name="Eggplants" lastSenderName="Eggplants" info="Yes i can do it for you" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://cdn.shopify.com/s/files/1/1061/1924/products/Eggplant_Emoji_large.png?v=1571606066" name="Eggplants!" />
                    </Conversation>
                    
                    <Conversation name="Bananas" lastSenderName="Bananas" info="Yes i can do it for you" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/118/banana_1f34c.png" name="Bananas!" />
                    </Conversation>
                    
                    <Conversation name="Pineapples" lastSenderName="Pineapples" info="Yes i can do it for you" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/81/pineapple_1f34d.png" name="Pineapples!" />
                    </Conversation>
                                
                    
                    
                </ConversationList>
            </div>
            : null
            }
            
            {!showing ?
                <div>
                    <Button variant="primary" onClick={() => this.setState({ showing: true })}>Back to Baskets</Button>{' '}
                    <Button variant="outline-warning">Basket Join Requests</Button>{' '}
                    <BasketUI></BasketUI>
                </div>
            : null
            }
        </div>
        );
        };
        
    }

//route to the fruit basket (write api get request that returns data of the people within the fruit basket)


export default Group