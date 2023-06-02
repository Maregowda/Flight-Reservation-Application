import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";

export const Login = () => {

    const [name, setName] = useState();
    const [pass, setPass] = useState();
    const [loginAlert, setLoginAlert] = useState(false);
    const navigate= useNavigate();
    const handleChange = (event) => {

        if (event.target.className === "input-username") {
            setName(event.target.value);
        }
        else if (event.target.className === "input-password") {
            setPass(event.target.value);
        }
    }

    const loginSubmit = async () => {

        const response = await fetch(`http://localhost:8080/flightreservation/login?username=${name}&password=${pass}`,{
            method: "POST",
            body: {},
            mode: "no-cors"
        })

        if(response.ok){
            navigate("/flights");
        } else {
            setLoginAlert(true);
        }
    }


    return (
        <>
        
            <div className="login">
                {loginAlert && (<div className="alertError"> Username and password is not correct </div>)}
                <div className="username">
                    <div className="text">Username :</div>
                    <input className="input-username" type="text" onChange={handleChange}></input>
                </div>
                <div className="password">
                    <div className="text">Password :</div>
                    <input className="input-password" type="password" onChange={handleChange}></input>
                </div>
                <button className="login-button" onClick={loginSubmit}>Login</button>
            </div>
        </>
    );
}

// class A {
//     private int a;
//     public int getA() {
//         return this.a;
//     }
//     public setA(int a) {
//         this.a = a;
//     }
// }
