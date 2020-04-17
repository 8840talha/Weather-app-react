import React, { Component } from 'react';
import './App.css';

import Title from './Components/Titles/Title'
import Form from './Components/Form/Form'
import Weather from './Components/Weather/Weather';
const apikey="67d2d45eb172e4d74338007cf4940d7a";
class App extends Component {


  state={
     temperature:'',
     city:'',
     country:'',
     humidity:'',
     description:'',
     error:''
                 
  }

  

getweatherHandler = async(e)=>{
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  console.log(city,country);
  
const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apikey}&units=metric`);
const data = await api_call.json();
console.log(data);
if(city&&country){
  this.setState({temperature:data.main.temp,
    city:data.name,
    country:data.sys,country,
    humidity:data.main.humidity,
    description:data.weather[0].description,
            
                               
})
}else{
  this.setState({error:"Please enter City And Country"})
}

}



  render() {
    return (
      <div className="app">
     <Title/>         
     <Form getWeather={this.getweatherHandler}/>
     <Weather  temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}   
                 error={this.state.error}             
       /> 
      </div>
    );
  }
}

export default App;
