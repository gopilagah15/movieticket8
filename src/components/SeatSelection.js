// src/components/SeatSelection.js
import React, { useState } from 'react';

const SeatSelection = ({ availableSeats, onSeatSelect }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    const isSelected = selectedSeats.includes(seat);
    const newSelectedSeats = isSelected
      ? selectedSeats.filter((s) => s !== seat)
      : [...selectedSeats, seat];
    setSelectedSeats(newSelectedSeats);
    onSeatSelect(newSelectedSeats);
  };

  return (
    <div className="seat-selection">
      <h3>Select Your Seats</h3>
      <div className="seat-grid">
        {availableSeats.map((seat) => (
          <button
            key={seat}
            className={selectedSeats.includes(seat) ? 'selected' : ''}
            onClick={() => handleSeatClick(seat)}
          >
            {seat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SeatSelection;
