import React, { useState, useEffect } from "react";
import "./plan.css";
import "./media.css";
import picTour from "../../../assets/pics/tour.png";
import axios from 'axios';

const Plan = () => {
  const [showPlan, setShowPlan] = useState(false);

  useEffect(() => {
    setShowPlan(true);
  }, []);

  const [from_location, setFrom] = useState('');
  const [destination, setDestination] = useState('');
  const [travel_date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReservation = { from_location, destination, travel_date };

    try {
      const response = await axios.post('http://localhost:8080/api/reservation', newReservation);
      console.log('Reservation added:', response.data);
    } catch (error) {
      console.error('Error adding reservation:', error);
    }

    setFrom('');
    setDestination('');
    setDate('');
  };

  return (
    <div>
      <div className={`divSecond ${showPlan ? "show" : ""}`}>
        <ul>
          <li className="tripPlan">
            <h2> Plan Your Trip </h2>
            <p className="pTrip">
              Ex optio sequi et quos praesentium in nostrum labore nam rerum
              iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.
            </p>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Where From?"
                  value={from_location}
                  onChange={(e) => setFrom(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Where To?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="date"
                  value={travel_date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="tourBtn">
                Book Now
              </button>
            </form>
          </li>

          <li>
            <img className="tourPic" alt="smth" src={picTour} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Plan;