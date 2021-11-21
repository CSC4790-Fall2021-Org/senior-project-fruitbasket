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
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import BasketMembers from './BasketMembers'



import {
    ConversationList,
    Conversation,
    Avatar,
  } from "@chatscope/chat-ui-kit-react";
import BasketInvites from "./BasketInvites";

class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showing: true , modal :false};
      }

    buttonClick(){
        this.setState({ showing: true })
    }
    
    render() {
        const { showing , modal} = this.state;
        return(
        <div>
            {showing ?
            <div style={{
            height: "500px"
            }}>
                <ConversationList>        
                    <Conversation name="Apples" lastSenderName="Joe" info="This app is great" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://cdn1.iconfinder.com/data/icons/users-61/32/user-07-512.png"  name="Peaches!" />
                    </Conversation>
                    
                    <Conversation name="Oranges" lastSenderName="Alison" info="Hey everyone!" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://cdn1.iconfinder.com/data/icons/users-61/32/user-07-512.png"  />
                    </Conversation>
                    
                    <Conversation name="Watermelons" lastSenderName="Mason" info="How are you all?" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://cdn1.iconfinder.com/data/icons/users-61/32/user-07-512.png" name="Bananas!" />
                    </Conversation>
                    
                    <Conversation name="Kiwis" lastSenderName="Maya" info="I am doing well" onClick={() => this.setState({ showing: !showing })}>
                    <Avatar src="https://cdn1.iconfinder.com/data/icons/users-61/32/user-07-512.png"  />
                    </Conversation>
                                
                    
                    
                </ConversationList>
            </div>
            : null
            }
            
            {!showing ?
                <div>
                    <div style={{ display: 'inline-block', padding: 2 }}><Button onClick={() => this.setState({ showing: true })}>Back to Baskets</Button></div>
                    <div style={{ display: 'inline-block', padding: 2 }}><BasketInvites ></BasketInvites></div>
                    <div style={{ display: 'inline-block', padding: 2 }}><BasketMembers></BasketMembers></div>
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