import React, { useState, useEffect } from 'react';

function FlightList() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('/flights')
            .then((response) => response.json())
            .then((data) => setFlights(data));
    }, []);

    return (
        <div>
            <h2>Flights</h2>
            <ul>
                {flights.map((flight) => (
                    <li key={flight._id}>
                        {flight.departureAirport} - {flight.arrivalAirport} ({flight.price})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FlightList;
