import React from 'react';
import './Form.css';

const form =(props)=>{
    return(
        <div style={{float:"left",marginLeft:"-500px"}}>
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="Enter City"/> 
                <input type="text" name="country" placeholder="Enter Country"/>
                <button >Get Weather</button>
            </form>
        </div>
    )
}

export default form;