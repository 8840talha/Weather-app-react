import React from 'react';
import './weather.css'

const weather = (props) => {
let error = props.error;
if(props.city){
    error='';
}

    return (
        <div className="weather">
            <h1>Weather Details</h1>
            {props.city && props.country && <h1>Location:{props.city},{props.country}</h1>}
            {props.temperature && <h4>Temperature:{props.temperature}</h4>}
            {props.description && <h4>Condition:{props.description}</h4>}
            {props.humidity && <h4>Humidity:{props.humidity}</h4>}
            { <p>{error}</p>}
        </div>

    )




}

export default weather;