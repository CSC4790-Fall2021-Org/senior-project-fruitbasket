import React from "react";
import Container from "react-bootstrap/Container";

import BasketType from "./BasketType";



class FilterBasket extends React.Component {
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
            <BasketType></BasketType>
        </Container>
        </>
        )
     }
}

export default FilterBasket;