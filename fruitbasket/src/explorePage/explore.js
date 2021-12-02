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
    const handleChange = () => {                
        setValues({
          name: "Yosemite",  
          age: '1098',
          city: 'Yosemite, CA',
          selfSummary: 'Park',
          doing: 'being a place',
          goodat: 'having sun, air, and grass',
          style: 'lots of waterfalls',
          src1: yosemite,
          src2: yosemite2,
          src3: yosemite3
        });

    };

    return(
        <>
        <FilterIndivudal></FilterIndivudal>
        <ExploreIndivual
            name= 'John Smith'
            ag= '32'
            city= 'Villanova, PA'
            selfSummary= '.'
            doing= 'I am a computer programmer.'
            goodat= 'Hiking, and reading books.'
            src1= "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            src2= "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
            src3= "https://play-lh.googleusercontent.com/proxy/2tj1HTTkxfLUCHMYCMY7Ik_u9Dv-ctrQ7tteluo8MkL9bUzSFutbEcvkGroJxU6PTS84IHjfzCYjRsCflXcZ5k_CV2OAD2Al4i_fUCrb6cBVNvtB4TZhu97Z=w720-h405-rw"
        ></ExploreIndivual>
        <FilterBasket></FilterBasket>
        <ExploreBasket></ExploreBasket>
        </>
    );
};

export default Explore
