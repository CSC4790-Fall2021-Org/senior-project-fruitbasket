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
            selfSummary= '.'
            doing= 'I am a computer programmer.'
            goodat= 'Hiking, and reading books.'
            src1= "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            src2= "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
            src3= "https://play-lh.googleusercontent.com/proxy/2tj1HTTkxfLUCHMYCMY7Ik_u9Dv-ctrQ7tteluo8MkL9bUzSFutbEcvkGroJxU6PTS84IHjfzCYjRsCflXcZ5k_CV2OAD2Al4i_fUCrb6cBVNvtB4TZhu97Z=w720-h405-rw"
        ></ExploreIndivual>
        <FilterBasket></FilterBasket>
        <ExploreBasket 
            id="0"
            name1="Thomas Adams"
            age1= '28'
            city1= 'San Francisco, CA'
            selfSummary1= 'I work in the tech industry'
            src1= {"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
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
            src2 = {"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
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
            src3= {"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
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
