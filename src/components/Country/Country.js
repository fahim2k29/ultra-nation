import React from 'react';

const Country = (props) => {
    const {name, population, flag, capital, region, area, alpha2Code, timezones} = props.country;
    const flagStyle = {height:'50px'};
    const countryStyle = {border:'1px solid blue', margin:'10px', padding:'10px'};
    const handleCountryAdd = props.handleCountryAdd;
    
    return (
        <div style={countryStyle}>
            <h4>This is a {name} - {capital} - {alpha2Code}</h4>
            <img src={flag} style={flagStyle} alt=""/>
            <p>Population: {population}, Area: {area} SKM</p>
            <p><small>Region: {region}, TimeZone: {timezones} </small></p>
            <button onClick={ () =>handleCountryAdd(props.country)}>Add Country</button>

        </div>
    );
};

export default Country;