import "./explore.css";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useCallback, useState } from "react";
import yosemite from './yosemitePic.jpg';
import yosemite2 from './yosemitePic2.jfif';
import yosemite3 from './yosemitePic3.jfif';
import ExploreIndivual from "./ExploreIndivual";
import ExploreBasket from "./ExploreBasket";
import FilterIndivudal from "./FilterIndividual";
import FilterBasket from "./FilterBasket";


const Explore = () => {

    const initialValues = { 
        
     };
    const [values, setValues] = useState(initialValues);

    return(
        <>
        <FilterIndivudal></FilterIndivudal>
        <ExploreIndivual
            name= 'John Smith'
            age= '32'
            city= 'Villanova, PA'
            selfSummary= 'I am a human being'
            doing= 'I am a computer programmer.'
            goodat= 'Hiking, and reading books.'
            src1= "https://picsum.photos/id/191/1000/1000"
            src2= "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
            src3= "https://picsum.photos/id/199/1000/1000"
        ></ExploreIndivual>
        <FilterBasket></FilterBasket>
        <ExploreBasket 
            id="0"
            name1="Thomas Adams"
            age1= '28'
            city1= 'San Francisco, CA'
            selfSummary1= 'I work in the tech industry'
            src1= "https://picsum.photos/id/1038/300/300"
            gender1="Bigender"
            orientation1= "Queer"
            relationships1= "Polyamorous"
            looking1= "A nice group of peopl"
            facts1="I have two dogs"
            id2="1"
            name2="John Washington"
            age2= "32"
            city2="Richmond, VA"
            selfSummary2="I work as a doctor"
            src2 = {"https://picsum.photos/id/10/200/300"}
            gender2 = "Male"
            orientation2 = "Straight"
            relationships2="Polyamorous"
            looking2= "Someone I share interests with"
            facts2="I have a lizard"
            id3="2"
            name3="George Jefferson" 
            age3= '52'
            city3= 'New York, NY'
            selfSummary3= 'I work as a banker'
            src3= {"https://picsum.photos/id/1019/200/300"}
            gender3="Male"
            orientation3="Bisexual"
            relationships3="Polyamorous"
            looking3="Someone to get old with"
            facts3="I have chihuahua"
        ></ExploreBasket>
        </>
    );
};

export default Explore
