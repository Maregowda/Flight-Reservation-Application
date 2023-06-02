import React from "react";
import { Link } from "react-router-dom";
import './home.scss';

export const Home=()=>{
    return(
    <>
    <h2>Flight Reservation Service</h2>
    <div className="button-wrapper">
        <Link to={"/login"}><button id="login">Login</button></Link>
        <Link to={"/signup"}><button id="signup">SignUp</button></Link>
    </div>
    </>
    );
}