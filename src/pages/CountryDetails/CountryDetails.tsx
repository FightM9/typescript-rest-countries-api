import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Container from '../../layouts/Container';
import { searchByName } from '../../services/api/config';

const CountryDetails = () => {
    const {name} = useParams;
    const [country, setContry] = useState()

    // useEffect(()=>{
    //     axios.get(searchByName(name)).then((data) => setContry(data))
    // },[])



    const navigation = useNavigate();
    const params = useParams();

    console.log(params.name);    

    const goBack = (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();        
        navigation(-1);
    }

    // return <Navigate to={'/NotFound'} replace/>


    return (
        <Container>
            <button onClick={goBack}>Back</button>
            Deteils {params.name}
        </Container>
    );
};

export default CountryDetails;