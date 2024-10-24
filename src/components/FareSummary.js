// src/components/FareSummary.js
import React from 'react';

const FareSummary = ({ selectedSeats, pricePerSeat, onConfirm }) => {
  const totalFare = selectedSeats.length * pricePerSeat;

  return (
    <div className="fare-summary">
      <h3>Fare Summary</h3>
      <p>Selected Seats: {selectedSeats.join(', ')}</p>
      <p>Total Price: ₹{totalFare}</p>
      <button onClick={onConfirm}>Confirm Booking</button>
    </div>
  );
};

export default FareSummary;
