import React from "react";
import { Link } from "react-router-dom";
import './flightCard.scss';

export const FlightCard = (props) => {
    const data = props?.item;
    return (
        <> {data &&
            (<div className="flight-list-items">
                <div className="details">
                    <table>
                        <tr>
                            <th>Flight Number</th>
                            <th>Airlines</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th></th>
                        </tr>
                        {data.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val?.flightNumber}</td>
                                    <td>{val?.operatingAirlines}</td>
                                    <td>{val?.dateOfDeparture}</td>
                                    <td>{val?.estimatedDepartureTime}</td>
                                    <Link to={`/reservation?flightnumber=${val?.flightNumber}`}><button>BOOK</button></Link>
                                </tr>
                            )
                        })}
                    </table>
                </div>

            </div>
            )}
        </>
    );
}

