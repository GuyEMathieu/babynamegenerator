import React, { useState } from 'react';
import { styled } from '@mui/material'
import Form from "../components/Form";

//#region Data
import {boyFirstNames} from '../data/boyFirstNames';
import {girlFirstNames} from '../data/girlFirstNames';
import { lastNames } from "../data/lastNames";
import {chineseFirstNames} from '../data/chineseFirstNames';
import {chineseLastNames} from '../data/chineseLastNames';
//#endregion

//#region Images
import baby from '../assets/images/baby.jpg'
import twins2 from '../assets/images/twins2.jpg'
import basket from '../assets/images/Baby-basket.jpg'
import feet from '../assets/images/feet.jpg'
import plush from "../assets/images/plush.jpg";
import hands_feet from "../assets/images/hands_feet.jpg";
import ribbon from "../assets/images/ribbon.jpg";
//#endregion


const Image = styled('img')(({ theme }) => ({
    width: '100vw',
    height: '100vh',
    opacity: '0.5'
}));

export default function FullWidthGrid() {

    function getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function randomPicture() {
        return getRandom([baby, twins2, basket, feet, plush, hands_feet, ribbon])
    }

    const [bg, setBG] = useState(randomPicture());

    const [params, setParams] = useState({
        nationality: "American",
        gender: "Male",
        includeLastName: false
    })

    const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        setParams(prev => {
            return {
                ...prev,
                [name]: name !== 'includeLastName' ? value : JSON.parse(value)
            }
        })
    }
    
    const generateName = () => {
        const { nationality, gender, includeLastName } = params;

        let name = ''

        if (nationality === 'American') {
            gender === 'Male'
                ? name = getRandom(boyFirstNames).name
                : name = getRandom(girlFirstNames).name
            
            if (includeLastName) {
                name = `${name} ${getRandom(lastNames).name}`
            }            
        } else {
            name = getRandom(chineseFirstNames).name

            if (includeLastName) {
                name = `${name} ${getRandom(chineseLastNames).name}`;
            }
        }

        setBG(randomPicture())

        setParams(prev => {
            return {
                ...prev,
                name: name
            }
        })
    }

    return (
        <React.Fragment>
            <Image src={bg} alt="Baby pictures"/>
            <Form
                params={params}
                generateName={generateName}
                handleChange={handleChange} />
        </React.Fragment>
    );
}
