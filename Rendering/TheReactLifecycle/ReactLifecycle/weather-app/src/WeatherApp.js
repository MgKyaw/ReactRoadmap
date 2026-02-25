// import React, { Component } from 'react';

// class WeatherApp extends Component {
//  render() {
//   return (
//    <div>
//     <h1>Current Weather</h1>
//    </div>
//   );
//  }
// }

// export default WeatherApp;

// // Use componentDidMount

// import React, { Component } from 'react';

// class WeatherApp extends Component {
//  constructor(props) {
//   super(props);
//   this.state = {
//    latitude: null,
//    longitude: null
//   };
//  }

//  componentDidMount() {
//   navigator.geolocation.getCurrentPosition(
//    (position) => {
//     const { latitude, longitude } = position.coords;
//     this.setState({ latitude, longitude });
//    },
//    (error) => {
//     console.error(error);
//    }
//   );
//  }

//  render() {
//   const { latitude, longitude } = this.state;

//   return (
//    <div>
//     <h1>Current Weather</h1>
//     <p>Latitude: {latitude}</p>
//     <p>Longitude: {longitude}</p>
//    </div>
//   );
//  }
// }

// export default WeatherApp;

// Add fetch

import React, { Component } from 'react';

const API_KEY = 'YOUR_API_KEY';

class WeatherApp extends Component {
constructor(props) {
 super(props);
 this.state = {
  latitude: null,
  longitude: null,
  weatherData: null
 };
}

componentDidMount() {
 // Fetch the user's location
 navigator.geolocation.getCurrentPosition(
  (position) => {
   const { latitude, longitude } = position.coords;
   this.setState({ latitude, longitude });

   // Fetch the weather data
   const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${latitude},${longitude}`;
   fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ weatherData: data }))
    .catch(error => console.error(error));
  },
  (error) => {
   console.error(error);
  }
 );
}
render() {
 const { latitude, longitude, weatherData } = this.state;

 return (
  <div>
   <h1>Current Weather</h1>
   {latitude && longitude && (
    <p>
     Latitude: {latitude}, Longitude: {longitude}
    </p>
   )}
   {weatherData && (
    <div>
     <p>Temperature: {weatherData.current.temperature}°C</p>
     <p>Description: {weatherData.current.weather_descriptions[0]}</p>
    </div>
   )}
  </div>
 );
}
}

export default WeatherApp;