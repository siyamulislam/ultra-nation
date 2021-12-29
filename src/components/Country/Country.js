import React from 'react';

const Country = (props) => {
    const {name, population,region, flag,flags,coatOfArms,area,startOfWeek,capital} = props.country;
    const handleAddCountry = props.handleAddCountry;
    const flagStyle = {height:'50px'}
    const countryStyle = {backgroundColor:'#e7edf5', border: '1px solid red', margin:'10px', padding:'10px'}
     
    return (
        <div style={countryStyle}>
            <p>{name.official}</p>
            <h3><strong> {name.common}</strong><sup>{flag}</sup></h3> 
            <img style={flagStyle} src={coatOfArms.png} alt=""/> <br />
            <img style={flagStyle} src={flags.png} alt=""/> <span> {capital} </span>
            <img style={flagStyle} src={flags.svg} alt=""/> 
            <p><small>startOfWeek: {startOfWeek}</small></p>
            <p><small>Population: {population}</small><span><small> Area: {area}</small></span></p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country </button>
        </div>
    );
};

export default Country;