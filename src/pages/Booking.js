import BookingForm from '../components/BookingForm'
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from '../api'

function Booking() {
    const updateTimes = ( times, resDate) => fetchAPI(resDate);
    const initializeTimes = () => fetchAPI(new Date());
    const submitForm = (formData) => submitAPI(formData);

    const [availableTimes, dispatchResDateChange] = useReducer(updateTimes, initializeTimes())

    return (
        <BookingForm
        availableTimes={availableTimes}
        dispatchResDateChange={dispatchResDateChange}
        submitForm={submitForm} />
    );
  };
  
  export default Booking;