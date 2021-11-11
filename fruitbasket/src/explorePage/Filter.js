import React from "react";
import Container from "react-bootstrap/Container";

import RelationshipType from "./RelationshipType";



class Filter extends React.Component {
    constructor(props) { 
        super(props);
     };
     render() {
        return(
        <>
        <Container className="text-center p-3">
            <h1>Filters</h1>
            
        </Container>
        <Container>
            <RelationshipType></RelationshipType>
        </Container>
        </>
        )
     }
}

export default Filter;
