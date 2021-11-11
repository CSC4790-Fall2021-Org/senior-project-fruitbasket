import React from "react";
import Container from "react-bootstrap/Container";



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
            <p1>Location
                <br></br>
                Age Range</p1>
            <form>
            <input id="multi3" class="multi-range" type="range" />
            </form>
            <p1>Relationship Type</p1>
        </Container>
        </>
        )
     }
}

export default Filter;
