import React, { useState } from "react";
import { FlightCard } from "../../components/flightCard";
import './flightSearch.scss';

export const Flight = () => {

    const [flights, setFlights] = useState({});
    const [detail, setDetail] = useState(null);
    const [searchAlert, setSearchAlert] = useState(false);
    const handleChange = (event) => {

        if (event.target.className === "input-arrival") {
            setFlights({ ...flights, arrivalCity: event.target.value });
        }
        else if (event.target.className === "input-departure") {
            setFlights({ ...flights, departureCity: event.target.value });
        }
        else {
            setFlights({ ...flights, departureDate: event.target.value });
        }
    }

    const search = async () => {
        try {
            setSearchAlert(false);
            let resp = await fetch(`http://localhost:8080/flightreservation/findflights?arrivalCity=${flights?.arrivalCity}&departureCity=${flights?.departureCity}&departureDate=${flights?.departureDate}`, {
                method: "GET",
                mode: "no-cors"
            });
            if (resp?.status != 200) {
                console.error("Internal Server Error");
                setSearchAlert(true);
            } else {
                let res = await resp.json();
                setDetail(res);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="flight">
                <h2>Flight Search</h2>
                {searchAlert && <div className="searchAlert"> Search is not avaiable </div>}
                <div className="arrival">
                    <div className="text">Arrival City :</div>
                    <input className="input-arrival" onChange={handleChange}></input>
                </div>
                <div className="departure">
                    <div className="text">Departure City :</div>
                    <input className="input-departure" onChange={handleChange}></input>
                </div>
                <div className="date">
                    <div className="text">Date :</div>
                    <input className="input-date" type={"date"} onChange={handleChange}></input>
                </div>
                <button className="search" onClick={search}>Search</button>
            </div>
            <FlightCard item={detail} />
        </>
    );
}