// src/utils/calculateFare.js
const calculateFare = (selectedSeats, pricePerSeat) => {
    return selectedSeats.length * pricePerSeat;
  };
  
  export default calculateFare;
  