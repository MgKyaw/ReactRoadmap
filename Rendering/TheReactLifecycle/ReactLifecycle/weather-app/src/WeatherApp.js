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

import React, { Component } from 'react';

class WeatherApp extends Component {
 constructor(props) {
  super(props);
  this.state = {
   latitude: null,
   longitude: null
  };
 }

 componentDidMount() {
  navigator.geolocation.getCurrentPosition(
   (position) => {
    const { latitude, longitude } = position.coords;
    this.setState({ latitude, longitude });
   },
   (error) => {
    console.error(error);
   }
  );
 }

 render() {
  const { latitude, longitude } = this.state;

  return (
   <div>
    <h1>Current Weather</h1>
    <p>Latitude: {latitude}</p>
    <p>Longitude: {longitude}</p>
   </div>
  );
 }
}

export default WeatherApp;