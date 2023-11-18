import { useState } from "react"

function BookingForm({ availableTimes, dispatchResDateChange }) {

    const [resDate, setResDate] = useState('');
    const [resTime, setResTime] = useState('');
    const [resNumGuests, setResNumGuests] = useState('');

    function handleResDateChange(e) {
        setResDate(e.target.value);
        dispatchResDateChange(e.target.value);
    }

    return (
        <form >
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