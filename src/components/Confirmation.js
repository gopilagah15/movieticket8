// src/components/Confirmation.js
import React from 'react';

const Confirmation = ({ movie, theater, time, seats, totalFare }) => {
  return (
    <div className="confirmation">
      <h3>Booking Confirmed</h3>
      <p>Movie: {movie.name}</p>
      <p>Theater: {theater.name}</p>
      <p>Showtime: {time}</p>
      <p>Seats: {seats.join(', ')}</p>
      <p>Total Price: ₹{totalFare}</p>
    </div>
  );
};

export default Confirmation;
