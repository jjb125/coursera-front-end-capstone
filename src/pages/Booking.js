import BookingForm from '../components/BookingForm'
import { useReducer } from 'react';

function Booking() {
    const updateTimes = (resDate) => initializeTimes()
    
    const initializeTimes = () => ['17:00','18:00','19:00','20:00','21:00','22:00']

    const [availableTimes, dispatchResDateChange] = useReducer(updateTimes, initializeTimes())

    return (
        <BookingForm
        availableTimes={availableTimes}
        dispatchResDateChange={dispatchResDateChange} />
    );
  };
  
  export default Booking;