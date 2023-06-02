import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup.scss';

export const Signup = () => {

    const [state, setState] = useState({});
    const [successSignup, setSuccessSignup] = useState(false);
    const navigate = useNavigate();
    const handleChange = (event) => {

        if (event.target.className === "first-name") {
            setState({ ...state, firstName: event.target.value });
        }
        else if (event.target.className === "last-name") {
            setState({ ...state, lastName: event.target.value });
        }
        else if (event.target.className === "input-email") {
            setState({ ...state, email: event.target.value });
        }
        else if (event.target.className === "input-password") {
            setState({ ...state, password: event.target.value });
        }
    }

    const signupSubmit = async () => {
        console.log(state);
        let header = new Headers();
        header.append("Content-Type", "application/json");
        header.append("Access-Control-Allow-Origin", "*")
        header.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
        header.append("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
        var raw = JSON.stringify({
            "firstName": state?.firstName,
            "lastName": state?.lastName,
            "email": state?.email,
            "password": state?.password
          });
          console.log(raw);
        const response= await fetch("http://127.0.0.1:8080/flightreservation/signup",{
            method: "POST",
            body: raw,
            headers: header,
        })
        console.log(response);
        if(response.ok){
            setSuccessSignup(true);
            setTimeout(() => {
                navigate("/login");
            },3000);
        }
    }

    return (
        <>
            <div className="signup">
                <div className="name">
                    <div className="text">First Name :</div>
                    <input className="first-name" type={"text"} onChange={handleChange}></input>
                </div>
                <div className="name">
                    <div className="text">Last Name :</div>
                    <input className="last-name" type={"text"} onChange={handleChange}></input>
                </div>
                <div className="email">
                    <div className="text">Email :</div>
                    <input className="input-email" type={"text"} onChange={handleChange}></input>
                </div>
                <div className="password">
                    <div className="text">Password :</div>
                    <input className="input-password" type={"password"} onChange={handleChange}></input>
                </div>
                {successSignup && ( <div className="successAlert"> Signup successfully done </div>) }
                <button className="signup" onClick={signupSubmit}>Sign up</button>
            </div>
        </>
    );
}