import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import './reservation.scss';

export const Reservation= () =>{

    const [ state , setState] = useState({});
    const [ searchParams ] = useSearchParams();
    const navigate = useNavigate();
    const handleChange = (event) => {
        if (event.target.className === "fname") {
            setState({ ...state, ...state.passenger, firstName: event.target.value });
        }
        else if (event.target.className === "lname") {
            setState({ ...state, ...state.passenger,lastName: event.target.value });
        }
        else if (event.target.className === "email") {
            setState({ ...state, ...state.passenger,email: event.target.value });
        }
        else if (event.target.className === "phone") {
            setState({ ...state, ...state.passenger,phone: event.target.value });
        }
        else if (event.target.className === "mname") {
            setState({ ...state, ...state.passenger,middleName: event.target.value });
        }
    }

    const bookFlight = async () => {

        let flightNumber = searchParams.get("flightnumber");
        setState({...state,...state.flight,flightNumber: flightNumber})

        const response = await fetch("http://localhost:8080/flightreservation/bookflight",{
            method: "POST",
            body: state,
            mode: "no-cors"
        })

        if(response.ok){
            navigate("/success");
        }
        else{
            console.log(response.status);
        }
    }
    
    return(
    <>
    <h2>Passenger Details</h2>
    <div className="fname">
        <div className="text">First Name :</div>
        <input className="fname" type={"text"} onChange={handleChange}></input>
    </div>
    <div className="lname">
        <div className="text">Last Name :</div>
        <input className="lname" type={"text"} onChange={handleChange}></input>
    </div>
    <div className="mname">
        <div className="text">Middle Name :</div>
        <input className="mname" type={"text"} onChange={handleChange}></input>
    </div>
    <div className="email">
        <div className="text">Email :</div>
        <input className="email" type={"text"} onChange={handleChange}></input>
    </div>
    <div className="phone">
        <div className="text">Phone :</div>
        <input className="phone" type={"number"} onChange={handleChange}></input>
    </div>

    <h2>Payment Details</h2>
    <div className="card">
        <div className="text">Card :</div>
        <input className="input-card" type={"number"}></input>
    </div>
    <div className="card-name">
        <div className="text">Name :</div>
        <input className="input-card-name" type={"text"}></input>
    </div>
    <div className="card-cvv">
        <div className="text">CVV :</div>
        <input className="input-card-cvv" type={"text"}></input>
    </div>
    <div className="card-expiry">
        <div className="text">CVV :</div>
        <input className="input-card-expiry" type={"text"}></input>
    </div>
    
    <button className="book" onClick={bookFlight}>BOOK</button>
    <button className="info">Flight Information</button>
    </>
    );
}