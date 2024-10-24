// src/components/TheaterSelection.js
import React from 'react';

const TheaterSelection = ({ theaters, onSelectTheater }) => {
  return (
    <div className="theater-selection">
      <h3>Select Theater and Showtime</h3>
      {theaters.map((theater) => (
        <div key={theater.id}>
          <h4>{theater.name}</h4>
          <ul>
            {theater.showtimes.map((time) => (
              <li key={time}>
                <button onClick={() => onSelectTheater(theater, time)}>
                  {time}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TheaterSelection;
