import React from "react";
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { Home } from "./screens/home/home";
import { Login } from "./screens/login/Login";
import { Signup } from "./screens/signup/signup";
import { Reservation } from "./screens/reservation/reservation";
import { Success } from "./screens/booking-successful/bookingSuccessful";
import { Flight } from "./screens/flight-search/flightSearch";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/success' element={<Success />}/>
      <Route path='/reservation' element={<Reservation />}/>
      <Route path='/flights' element={<Flight />}/>
      </Switch>
      <img src="flight_image.jpeg" width="1500px" height="780px" alt="Girl in a jacket" />
    </div>
    </BrowserRouter>
  );
}

export default App;

// props -> {name: 'Maregowda'}

// function ABC(props) {
//   return <h1>Sachin {props.name}</h1>;
// }

// class ABCD extends React.Component {
//   render() {
//     return <h1>Sachin {this.props.name}</h1>;
//   }
// }


// Class Component

// Functional Component 