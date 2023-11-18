import { render, screen, within } from '@testing-library/react';
import BookingForm from './BookingForm';

const availableTimes = ['1:00', '2:00', '3:00'];

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={availableTimes}/>);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})

test('Initial values of available times', () => {
    render(<BookingForm availableTimes={availableTimes}/>);
    const timeInput = screen.getByLabelText('Choose time')
    const timeOptions = within(timeInput).getAllByRole("option");
    expect(timeOptions.length).toBe(3);
})
