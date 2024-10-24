import React, { useState } from 'react';
import MovieList from './components/MovieList';
import TheaterSelection from './components/TheaterSelection';
import SeatSelection from './components/SeatSelection';
import FareSummary from './components/FareSummary';
import Confirmation from './components/Confirmation';
import calculateFare from './utils/calculateFare';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalFare, setTotalFare] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  const movies = [
    { id: 1, name: 'Inception' },
    { id: 2, name: 'Interstellar' },
    { id: 3, name: 'The Dark Knight' },
  ];

  const theaters = [
    {
      id: 1,
      name: 'Cinema Hall A',
      showtimes: ['12:00 PM', '03:00 PM', '06:00 PM'],
    },
    {
      id: 2,
      name: 'Cinema Hall B',
      showtimes: ['01:00 PM', '04:00 PM', '07:00 PM'],
    },
  ];

  const availableSeats = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];

  const pricePerSeat = 150; // ₹150 per seat

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setSelectedTheater(null); // Reset theater selection on movie change
  };

  const handleSelectTheater = (theater, time) => {
    setSelectedTheater(theater);
    setSelectedTime(time);
  };

  const handleSeatSelection = (seats) => {
    setSelectedSeats(seats);
  };

  const handleFareCalculation = () => {
    const fare = calculateFare(selectedSeats, pricePerSeat);
    setTotalFare(fare);
  };

  const confirmBooking = () => {
    setConfirmed(true);
  };

  return (
    <div className="App">
      <h1>Movie Ticket Booking System</h1>
      {!confirmed ? (
        <>
          {!selectedMovie ? (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          ) : !selectedTheater ? (
            <TheaterSelection theaters={theaters} onSelectTheater={handleSelectTheater} />
          ) : (
            <>
              <SeatSelection availableSeats={availableSeats} onSeatSelect={handleSeatSelection} />
              {selectedSeats.length > 0 && (
                <>
                  <FareSummary
                    selectedSeats={selectedSeats}
                    pricePerSeat={pricePerSeat}
                    onConfirm={() => {
                      handleFareCalculation();
                      confirmBooking();
                    }}
                  />
                </>
              )}
            </>
          )}
        </>
      ) : (
        <Confirmation
          movie={selectedMovie}
          theater={selectedTheater}
          time={selectedTime}
          seats={selectedSeats}
          totalFare={totalFare}
        />
      )}
    </div>
  );
};

export default App;
