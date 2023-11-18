import { useState } from "react"
import { useNavigate } from 'react-router-dom';

function BookingForm({ availableTimes, dispatchResDateChange, submitForm }) {

    const [resDate, setResDate] = useState('');
    const [resTime, setResTime] = useState('');
    const [resNumGuests, setResNumGuests] = useState('');
    const navigate = useNavigate();

    function handleResDateChange(e) {
        setResDate(e.target.value);
        dispatchResDateChange(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const formData = { resDate, resTime, resNumGuests }
        if(submitForm(formData)) navigate('/reservation-confirmation')
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={resDate} onChange={handleResDateChange} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={resTime} onChange={(e) => setResTime(e.target.value)}>
                {availableTimes.map(time => <option key={time}>{time}</option>)}
            </select>
            <label htmlFor="guests" value={resNumGuests} onChange={(e) => setResNumGuests(e.target.value)}>Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
}

export default BookingForm;