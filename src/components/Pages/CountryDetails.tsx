import React from 'react';
import { useParams } from "react-router-dom";
import Container from '../../layouts/Container';

const CountryDetails = () => {
    let params = useParams();
    console.log(params);    

    return (
        <Container>
            Deteils
        </Container>
    );
};

export default CountryDetails;