import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const {crName} = useParams();
    const [detail, setDetail] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${crName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setDetail(data)
        })
    }, [])

    return (
        <div>
            <h3>
            Capital : {detail.capital}
            </h3>
            <p>Country Details: {crName}</p>
        </div>
    );
};

export default CountryDetail;