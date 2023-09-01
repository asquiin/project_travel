import React, { useState, useEffect } from 'react';
import './Upcoming.css'
import './media.css'

const Upcoming = () => {
  const [reservations, setReservations] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  const fetchReservations = () => {
    fetch('http://localhost:8080/api/reservation')
      .then(res => res.json())
      .then(data => {
        setReservations(data);
        setIsFetched(true);
      })
      .catch(error => console.error('Error fetching reservations:', error));
  };

  useEffect(() => {
    fetchReservations(); 
  }, []);


  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const date = new Date(dateString);

    if (date.getHours() === 0 && date.getMinutes() === 0 && date.getSeconds() === 0) {
      options.hour = undefined;
      options.minute = undefined;
      options.second = undefined;
    }

    return date.toLocaleString('en-US', options);
  };

  return (
    <div>
      <div className='upcomingDiv'> 
        {isFetched ? ( 
          <table className='tablePackage'>
            <thead>
              <tr>
                <th>From</th>
                <th>Destination</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map(reservation => (
                <tr key={reservation.id}>
                  <td>{reservation.from_location}</td>
                  <td>{reservation.destination}</td>
                  <td>{formatDate(reservation.travel_date)}</td> 
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{color: "black"}}>Loading all reservations...</p>
        )}
      </div>
    </div>
  );
};

export default Upcoming;
