import { useState } from "react"
import FormField from './FormField'

function BookingForm({ availableTimes, dispatchResDateChange, submitForm }) {

    const minDate = new Date(new Date().toLocaleDateString())  // today
    const minGuests = 1
    const maxGuests = 10

    const [resDate, setResDate] = useState(minDate);
    const [resTime, setResTime] = useState(availableTimes[0]);
    const [resNumGuests, setResNumGuests] = useState(minGuests);

    function handleResDateChange(e) {
        setResDate(e.target.value);
        dispatchResDateChange(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        submitForm({ resDate, resTime, resNumGuests })
    }

    const isDateValid = new Date(`${resDate}T00:00`) >= minDate
    const isTimeValid = resTime.length > 0
    const isNumGuestsValid = resNumGuests >= minGuests && resNumGuests <= maxGuests
    const isFormValid = isDateValid && isTimeValid && isNumGuestsValid

    return (
        <form onSubmit={handleFormSubmit}>
            <FormField
                hasError={!isDateValid}
                errorMessage={`Please enter a date on or after today`}>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    data-testid="date"
                    min={minDate}
                    value={resDate}
                    required={true}
                    onChange={handleResDateChange} />
            </FormField>
            <FormField
                hasError={!isTimeValid}
                errorMessage={'Please enter a valid time'}>
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    data-testid="time"
                    value={resTime}
                    required={true}
                    onChange={(e) => setResTime(e.target.value)}>
                    {availableTimes.map(time => <option key={time}>{time}</option>)}
                </select>
            </FormField>
            <FormField
                hasError={!isNumGuestsValid}
                errorMessage={`Please enter a value between ${minGuests} and ${maxGuests}`}>
                <label htmlFor="guests" >Number of guests</label>
                <input
                    type="number"
                    min={minGuests}
                    max={maxGuests}
                    id="guests"
                    data-testid="guests"
                    required={true}
                    value={resNumGuests}
                    onChange={(e) => setResNumGuests(e.target.value)} />
            </FormField>
            <FormField>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </FormField>
            <button type="submit" value="Make Your reservation" disabled={!isFormValid}>
                Make your reservation
            </button>
        </form>
    )
}

export default BookingForm;